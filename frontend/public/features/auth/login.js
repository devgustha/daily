import { setUser, removeUser, getUser } from '/shared/auth.js'
import { showError, showSuccess, showWarn } from '/shared/notifications.js'
import { closeModals, showModal } from '/shared/screens.js'

const registerUsernameInput = document.getElementById('register-username')
const registerEmailInput = document.getElementById('register-email')
const registerPasswordInput = document.getElementById('register-password')
const registerConfirmPasswordInput = document.getElementById(
	'register-confirm-password',
)

const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')

const nav = document.getElementById('main-nav')

export function createProfileUI(user) {
	const loginButton = document.getElementById('login-button')
	loginButton?.remove()

	const userEl = document.createElement('button')
	userEl.innerText = user.username
	userEl.className = 'profile-button'
	userEl.id = user.username + '-button'

	nav.appendChild(userEl)
}

export function logout() {
	const user = getUser()

	if (!user) {
		showError('Você não está logado para efetuar logout', 400)
		return
	}

	user ?? document.getElementById(user.username + '-button').remove()
	removeUser()
	createLoginUI()
	closeModals()
	showSuccess('Logout feito com sucesso!', 200)
}

export function createLoginUI() {
	const b = document.createElement('button')
	b.id = 'login-button'
	b.className = 'profile-button'
	b.innerText = 'Login'
	b.addEventListener('click', () => {
		showModal('login')
	})
	nav.appendChild(b)
}

export function login() {
	const email = loginEmail.value
	const password = loginPassword.value

	fetch('/api.php?action=users.read', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: email, password: password }),
	})
		.then((r) => {
			console.log(r.ok, r.body)
			return r.json()
		})
		.then((b) => {
			console.log(b)
			if (!b.ok) {
				showError(b.message, b.status)
				return
			}
			showSuccess('Logado com sucesso!', b.status)

			const user = b.user

			setUser(user)
			createProfileUI(user)

			closeModals()
		})
}

export function register() {
	const username = registerUsernameInput.value
	const email = registerEmailInput.value
	const password = registerPasswordInput.value
	const confirmPassword = registerConfirmPasswordInput.value

	fetch('/api.php?action=users.create', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username: username,
			email: email,
			password: password,
			confirm_password: confirmPassword,
		}),
	})
		.then((r) => r.json())
		.then((b) => {
			if (!b.ok) {
				showError(b.message, b.status)
				return
			}
			showSuccess('Registrado com sucesso!', b.status)
			createProfileUI(b.user)
			setUser(b.user)
			closeModals()
		})
}
