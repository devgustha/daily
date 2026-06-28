const body = document.querySelector('body')

class Notification {
    constructor(type, msg) {
        this.element = document.createElement('div')
        this.element.className = 'notification'
        this.element.setAttribute('data-type', type)
        this.element.innerHTML = `
            <span><strong>${type}</strong>: ${msg}</span>
        `
        body.appendChild(this.element)

        this.duration = 4
        
        setTimeout(() => {
            this.element.remove()
        }, this.duration * 1000)
    }
}

export function showError(msg) {
    const notification = new Notification('error', msg)
    console.error(msg)
}

export function showWarn(msg) {
    const notification = new Notification('warn', msg)
}

export function showSuccess(msg) {
    console.info('YA')
    const notification = new Notification('success', msg)
}