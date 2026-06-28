import { showError } from './shared/notifications.js'
import { showSuccess } from './shared/notifications.js'

const titleInput = document.getElementById('new-entry-title')
const dateInput = document.getElementById('new-entry-date')
const contentInput = document.getElementById('new-entry-content')
const passwordInput = document.getElementById('new-entry-password')

const diarySection = document.getElementById('diary-section')

export function createNewEntry() {
	console.log('HMMM')
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
	const hasEmpty = requiredInputs.some((e) => !e.value)

	if (hasEmpty) {
		showError('Você DEVE preencher todos os campos obrigatórios!')
		return
	}

	const createdAt = `${year}-${month}-${day}T${hour}:${minute}`
	const entryPassword = passwordInput.value?.trim()

	fetch('/api/diary/create.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			title: title,
			content: content,
			created_at: createdAt,
			entry_date: entryDate,
			entry_password: entryPassword,
		}),
	})
		.then((r) => r.text())
		.then((t) => console.log(t))

	showSuccess('Entrada criada com sucesso!')
	loadDiary()
}

function renderEntry(id, title, content, createdAt, entryDate, hasPassword) {
	const entry = document.createElement('article')
	entry.className = 'entry-card'
	entry.id = `entry-id-${id}`

	const createdAtText = new Date(createdAt).toLocaleDateString('pt-br', {
		minute: '2-digit',
		hour: '2-digit',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const entryDateText =
		entryDate ?
			new Date(entryDate).toLocaleDateString('pt-br', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})
		:	'Sem data'

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
	diarySection.appendChild(entry)
}

export function loadDiary() {
	diarySection.replaceChildren()
	fetch('/api/diary/read.php')
		.then((r) => r.json())
		.then((diary) => {
			diary.forEach((entry) => {
				renderEntry(
					entry.id,
					entry.title,
					entry.content,
					entry.created_at,
					entry.entry_date,
					entry.entry_password.length > 0 ? true : false,
				)
			})
		})
}

loadDiary()
