import { getUser } from '/shared/auth.js'
import { showError, showSuccess } from '/shared/notifications.js'
import { closeModals } from '/shared/screens.js'

const titleInput = document.getElementById('new-entry-title')
const dateInput = document.getElementById('new-entry-date')
const contentInput = document.getElementById('new-entry-content')
const passwordInput = document.getElementById('new-entry-password')

const diarySection = document.getElementById('diary-section')

export function createNewEntry() {
	const user = getUser()

	const date = new Date(Date.now())
	const minute = String(date.getMinutes()).padStart(2, '0')
	const hour = String(date.getHours()).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	const title = titleInput.value
	const entryDate = dateInput.value
	const content = contentInput.value

	const requiredInputs = [titleInput, contentInput]

	const createdAt = `${year}-${month}-${day}T${hour}:${minute}`
	const entryPassword = passwordInput.value?.trim()

	fetch('/api.php?action=diary.create', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			title: title,
			content: content,
			created_at: createdAt,
			entry_date: entryDate,
			entry_password: entryPassword,
			user_email: user?.email,
		}),
	})
		.then((r) => r.json())
		.then((b) => {
			if (!b.ok) {
				showError(b.message, b.status)
				return
			}

			showSuccess(b.message, b.status)
			closeModals()
			loadDiary()
		})
}

function deleteEntry(entry) {
	const id = entry.getAttribute('data-id')
	fetch('/api.php?action=diary.delete', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id: id }),
	})
		.then((r) => r.json())
		.then((b) => {
			if (!b.ok) {
				showError(b.message, b.status)
				return
			}
			showSuccess(b.message, b.status)
			entry.remove()
		})
}

function renderEntry(id, title, content, createdAt, entryDate, hasPassword) {
	const entry = document.createElement('article')
	entry.className = 'entry-card'
	entry.id = `entry-${id}`
	entry.setAttribute('data-id', id)

	const createdAtText = new Date(createdAt).toLocaleDateString('pt-BR', {
		minute: '2-digit',
		hour: '2-digit',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const entryDateText =
		entryDate && !isNaN(new Date(entryDate)) ?
			new Date(entryDate + 'T12:00:00').toLocaleDateString('pt-BR', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})
		:	'Sem data'

	const deleteButton = document.createElement('button')
	deleteButton.className = 'delete-button'
	deleteButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="currentColor"
			viewBox="0 0 16 16">
			<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5
					0A.5.5 0 0 1 8.5 6v6a.5.5 0 0 1-1
					0V6a.5.5 0 0 1 .5-.5zm3
					.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1
					0V6z"/>
			<path d="M14.5 3a1 1 0 0 1-1
					1H13v9a2 2 0 0 1-2
					2H5a2 2 0 0 1-2-2V4h-.5a1
					1 0 0 1-1-1V2a1 1 0 0 1
					1-1H5a1 1 0 0 1
					1-1h4a1 1 0 0 1
					1 1h2.5a1 1 0 0 1
					1 1v1z"/>
		</svg>`

	deleteButton.addEventListener('click', () => {
		if (!confirm('Deseja mesmo deletar esta entrada?')) return
		deleteEntry(entry)
	})

	entry.innerHTML = `
    <h2>${title}</h2>

    <div class="entry-meta">
        <span>Data:</span>
        <time class="entry-date" datetime="${entryDate}">
            ${entryDateText}
        </time>
    </div>

    <div class="entry-meta">
        <span>Criado em:</span>
        <time class="entry-created-at" datetime="${createdAt}">
            ${createdAtText}
        </time>
    </div>

    <div class="entry-meta">
        <span>Possui senha:</span>
        <mark ${hasPassword ? 'green' : 'red'}>${hasPassword ? 'Sim' : 'Não'}</mark>
    </div>

    <div class="entry-content">
        <span><strong>Conteúdo:</strong></span>
        
        <span ${hasPassword ? 'class="muted"' : ''}>
            ${hasPassword ? 'Precisa-se da senha para liberar o conteúdo.' : content}
        </span>
    </div>
`
	entry.prepend(deleteButton)
	diarySection.appendChild(entry)
}

export function loadDiary() {
	const user = getUser()
	fetch('/api.php?action=diary.read', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ user_email: user?.email }),
	})
		.then((r) => {
			return r.json()
		})
		.then((b) => {
			if (!b.ok) {
				showError(b.message, b.status)
				return
			}

			const diary = b.diary
			diarySection.replaceChildren()
			diary.forEach((entry) => {
				renderEntry(
					entry.id,
					entry.title,
					entry.content,
					entry.created_at,
					entry.entry_date,
					!!entry.entry_password?.length,
				)
			})
		})
}
