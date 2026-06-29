const notificationContainer = document.getElementById('notification-container')

class Notification {
    constructor(type, msg, code) {
        this.element = document.createElement('div')
        this.element.className = 'notification'
        this.element.setAttribute('data-type', type)
        this.element.innerHTML = `
            <span>${code ? '<strong>(' + code + ')</strong>: ' : ''}${msg}</span>
        `
        notificationContainer.appendChild(this.element)

        this.duration = 3.5 * 1000

        this.opacity = 1
        setTimeout(() => this.fadeOut(), this.duration)
    }

    fadeOut() {
        const step = () => {
            this.opacity -= 0.0167
            this.element.style.opacity = this.opacity

            if (this.opacity > 0) {
                requestAnimationFrame(step)
            } else {
                this.element.remove()
            }
        }

        requestAnimationFrame(step)
    }
}

export function showError(msg, code) {
    const notification = new Notification('error', msg, code)
}

export function showWarn(msg, code) {
    const notification = new Notification('warn', msg, code)
}

export function showSuccess(msg, code) {
    const notification = new Notification('success', msg, code)
}

export function showInfo(msg, code) {
    const notification = new Notification('info', msg, code)
}