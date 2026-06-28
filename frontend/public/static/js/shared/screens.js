export const screens = {
    'home': document.querySelector('#home-screen'),
    'diary': document.querySelector('#diary-screen'),
    'settings': document.querySelector('#settings-screen')
}

export const modals = {
	'login': document.querySelector('#login-modal'),
	'register': document.querySelector('#register-modal'),
    'new-entry': document.querySelector('#new-entry-modal')
}

export function showScreen(name) {
    console.log(`Changing to ${name}`)
    Object.values(screens).forEach(e => {
        e.removeAttribute('data-visible')
    })
    screens[name].toggleAttribute('data-visible')
    
}

export function showModal(name) {
    modals[name]?.showModal()
}

export function closeModals() {
    Object.values(modals).forEach((e) => {
        e.close()
    })
}