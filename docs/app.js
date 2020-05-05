// vytvoris si instanciu Github classy vlozis ju do konstanti github
// vytvoris si instanciu UI classy vlozis ju do konstanti ui

// selektnem si input element a vytvorim nad nim posluchaca na enter tj 'keyup'
// po zavolani si vytvor validaciu ak je parazdny string zavolas ui.clearProfile()

// ak nie je zavolas github.getUser(zaslem sem userText) nasledne vyuzijem .then(
// v ktorom sa mi vrati vysledok volanej funkcie a spravim si validaciu kde
// ak je data.profile.message === 'Not Found' zavolas funkciu z ui showAlert('User not found', 'alert alert-danger')
// ak nie je zavolas dve funkcie z ui a to showProfile do ktorej zasles data.profile
// a showRepos(data.repos)

const gitHub = new Github()
const ui = new UI()

const input = document.getElementById('inputUserName')

input.addEventListener('keyup', e => {
	const userName = e.target.value
	if (userName === '') {
		ui.clearProfile()
	} else {
		gitHub.getUser(userName).then(data => {
			if (data.profile.message === 'Not Found') {
				ui.showAlert()
			} else {
				ui.showProfile(data.profile)
				ui.showRepos(data.repos)
			}
		})
	}
})
