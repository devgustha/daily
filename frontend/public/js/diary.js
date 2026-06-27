const newEntryModal = document.getElementById('new-entry-modal')

const titleInput = document.getElementById('new-entry-title')
const dateInput = document.getElementById('new-entry-date')
const contentInput = document.getElementById('new-entry-content')

function showNewEntryModal() {
	newEntryModal.showModal()
}

function closeNewEntryModal(resetInputs) {
	if (resetInputs) {
		titleInput.value = ''
		dateInput.value = ''
		contentInput.value = ''
	}
	newEntryModal.close()
}

function createNewEntry() {
	const date = new Date(Date.now())
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	const title = titleInput.value
	const entryDate = dateInput.value
	const content = contentInput.value
	const createdAt = `${year}-${month}-${day}`

	const entryPassword = '123'

	fetch('/api/diary/create.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: title,
			content: content,
			created_at: createdAt,
			entry_date: entryDate,
			entry_password: entryPassword
		}),
	})
		.then((r) => r.text())
		.then((t) => console.log(t))
}

function loadDiary() {
	fetch('/api/diary/read.php', {
		method: 'GET',
	})
}
