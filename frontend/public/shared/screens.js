export const screens = {
    'home': document.querySelector('#home-screen'),
    'diary': document.querySelector('#diary-screen'),
    'settings': document.querySelector('#settings-screen'),
    'profile': document.querySelector('#profile-screen'),
}

export const modals = {
	'login': document.querySelector('#login-modal'),
	'register': document.querySelector('#register-modal'),
    'new-entry': document.querySelector('#new-entry-modal'),
}

export function showScreen(name) {
    console.log(`Changing to ${name}`)
    Object.values(screens).forEach(e => {
        e.removeAttribute('data-visible')
    })
    screens[name].toggleAttribute('data-visible')
}

export function showModal(name) {
    closeModals()
    modals[name]?.showModal()
}

export function resetAllPasswordInputs() {
    const passwordElements = document.querySelectorAll('input')
    passwordElements.forEach((e) => {
        if (e.type === 'password') {
            e.value = ''
        }
    })
}

export function closeModals() {
    resetAllPasswordInputs()
    Object.values(modals).forEach((e) => {
        e.close()
    })
}