const body = document.querySelector('body')

function loadTheme() {
    let theme = localStorage.getItem('theme') || 'dark'
    body.classList.remove('light-theme')
    body.classList.remove('dark-theme')
    body.classList.add(theme + '-theme')
}

function main() {
	loadTheme()
}

main()