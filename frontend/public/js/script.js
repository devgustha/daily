import { closeModals, showModal, showScreen } from '/shared/screens.js'
import { changeTheme } from '/features/settings/settings.js'
import { loadDiary, createNewEntry } from '/features/diary/diary.js'
import {
	login,
	register,
	createProfileUI,
	createLoginUI,
	logout,
} from '/features/auth/login.js'
import { getUser } from '/shared/auth.js'

const body = document.querySelector('body')

function registerEvents() {
	// Modals buttons
	document
		.getElementById('register-modal-login-button')
		?.addEventListener('click', () => {
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
		if (!cb.getAttribute('data-close-modals')) return
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
	document
		.getElementById('profile-screen-button')
		?.addEventListener('click', () => {
			showScreen('profile')
		})

	// Function buttons
	document.getElementById('login')?.addEventListener('click', login)
	document.getElementById('register')?.addEventListener('click', register)

	const changeThemeButton = document.getElementById('change-theme-button')

	changeThemeButton?.addEventListener('click', () => {
		changeTheme(changeThemeButton)
	})
	document
		.getElementById('create-entry-button')
		?.addEventListener('click', createNewEntry)
	document.getElementById('logout-button')?.addEventListener('click', () => {
		logout()
	})
}

function loadTheme() {
	let theme = localStorage.getItem('theme') || 'dark'
	body.classList.remove('light-theme')
	body.classList.remove('dark-theme')
	body.classList.add(theme + '-theme')
}

function loadProfile() {
	const savedUser = getUser()
	if (!savedUser) {
		createLoginUI()
		closeModals()
		return
	}
	createProfileUI(savedUser)
	closeModals()
}

function main() {
	loadTheme()
	registerEvents()
	loadDiary()
	loadProfile()
}

main()
