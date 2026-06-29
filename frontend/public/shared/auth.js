export function getUser() {
	const savedUser = localStorage.getItem('profile-info')
	if (savedUser) {
		const user = JSON.parse(savedUser)
		return user
	}
}

export function removeUser() {
	localStorage.removeItem('profile-info')
}

export function setUser(user) {
	localStorage.setItem('profile-info', JSON.stringify(user))
}
