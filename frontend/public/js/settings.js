function changeTheme(button) {
	const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'

	localStorage.setItem('theme', newTheme)

	body.classList.toggle('dark-theme', newTheme === 'dark')
	body.classList.toggle('light-theme', newTheme === 'light')

	button.innerText = newTheme === 'dark' ? 'Escuro' : 'Claro'
}
