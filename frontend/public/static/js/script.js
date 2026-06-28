import { closeModals, showModal, showScreen } from './shared/screens.js'
import { changeTheme } from './settings.js'
import { loadDiary, createNewEntry } from './diary.js'

const body = document.querySelector('body')

function registerEvents() {
	// Modals buttons
	document.getElementById('login-button')?.addEventListener('click', () => {
		showModal('login')
	})
	document
		.getElementById('register-button')
		?.addEventListener('click', () => {
			showModal('register')
		})
	document.querySelectorAll('.close-button').forEach((cb) => {
		cb.addEventListener('click', closeModals)
	})
	document.querySelectorAll('.cancel-button').forEach((cb) => {
		cb.addEventListener('click', closeModals)
	})
	document.querySelectorAll('.confirm-button').forEach((cb) => {
		cb.addEventListener('click', closeModals)
	})
	document
		.getElementById('new-entry-button')
		?.addEventListener('click', () => {
			showModal('new-entry')
		})

	// Screen buttons
	document
		.getElementById('home-screen-button')
		?.addEventListener('click', () => {
			showScreen('home')
		})
	document
		.getElementById('diary-screen-button')
		?.addEventListener('click', () => {
			showScreen('diary')
		})
	document
		.getElementById('settings-screen-button')
		?.addEventListener('click', () => {
			showScreen('settings')
		})

	// Function buttons
	document.getElementById('login-button')?.addEventListener('click', () => {})
	document
		.getElementById('register-button')
		?.addEventListener('click', () => {})

	const changeThemeButton = document.getElementById('change-theme-button')

	changeThemeButton?.addEventListener('click', () => {
		changeTheme(changeThemeButton)
	})
	document
		.getElementById('create-entry-button')
		?.addEventListener('click', createNewEntry)
}

function loadTheme() {
	let theme = localStorage.getItem('theme') || 'dark'
	body.classList.remove('light-theme')
	body.classList.remove('dark-theme')
	body.classList.add(theme + '-theme')
}

function main() {
	loadTheme()
	registerEvents()
	loadDiary()
}

main()
