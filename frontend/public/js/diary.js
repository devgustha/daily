const newEntryModal = document.getElementById('new-entry-modal')

const titleInput = document.getElementById('new-entry-title')
const dateInput = document.getElementById('new-entry-date')
const contentInput = document.getElementById('new-entry-content')

function showNewEntryModal() {
	newEntryModal.showModal()
}

function closeNewEntryModal() {
	newEntryModal.close()
}

function createNewEntry() {
	console.log(`Title: ${titleInput.value}`)
	console.log(`Date: ${dateInput.value}`)
	console.log(`Content: ${contentInput.value}`)

	const date = new Date(Date.now())
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()
	const formattedDate = `${year}-${month}-${day}`
	
	console.log(`Created at: ${formattedDate}`)
}
