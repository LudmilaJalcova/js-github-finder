// vytvoris class objekt UI
// zaciatocnom stave v objekte budes mat parameter this.propfile ktori obsahuje selektor pre divko do ktoreho budes vkladat vsetky vysledky teda userProfile a userRepositories

// v UI objekte si nadefinujes 4 funkcii v
// prva funkcia s nazvom showProfile ocakavany vstupny parameter user
// vo vnutri tejto funkcie si zoberies this.profile.innerHTML = `
//   sem pojde htmlko a user informacie podla designu
// na konci celeho vraperu ohladom user info budes mat divko s id repos ktore si selektnes vo funkcii nizsie
// `

// druha funkcia s nazvom showRepos ocakavany vstupny parameter repos
// kedze repos je pole tak pomocou forEach vytvor cely zoznam vsetky repositarov s informaciami a HTMLkom a vloz to do document.getElementById('repos').innerHTML = output;

// tretia funkcia showAlert prekvap ma

// posledna funkcia
// clearProfile() {
//   this.profile.innerHTML = '';
// }

class UI {
	constructor() {
		this.profile = document.getElementById('infoFromUser')
	}

	showProfile(user) {
		this.profile.innerHTML = `
				<div class="card card-body mt-3">
					<div class="row">
						<div class="col-md-3">
							<img
								src="${user.avatar_url}"
								class="img-fluid mb-2"
								alt="user"
							/>
							<a
								target="_blank"
								href=${user.html_url}
								class="btn btn-primary btn-block mb-4"
							>
								View Profile
							</a>
						</div>
						<div class="col-md-9">
							<span class="badge badge-primary">Public Repos:${user.public_repos}</span>
							<span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
							<span class="badge badge-success">Followers:${user.followers}</span>
							<span class="badge badge-info">Following:${user.following}</span>
							<ul class="list-group mt-3">
								<li class="list-group-item p-2 text-secondary">
									Company:${user.company}
								</li>
								<li class="list-group-item p-2 text-secondary">
									Website/Blog:${user.blog}
								</li>
								<li class="list-group-item p-2 text-secondary">
									Location:${user.location}
								</li>
								<li class="list-group-item p-2 text-secondary">
									Member Since:${user.created_at}
								</li>
							</ul>
						</div>
					</div>
			</div>
			<h3 class="mt-3">Latest Repos</h3>
			<div id="repos"></div>
		`
	}

	showRepos(repos) {
		console.log(repos)

		let output = ''
		//stars, watchers, forks -> odkial stiahnut realne cisla?
		repos.forEach(repo => {
			output += `
			<div class="card card-body">
				<div class="row">
					<div class="col-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-6">
						<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
						<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
						<span class="badge badge-success">Forks: ${repo.forks_count}</span>
					</div>
				</div>
			</div>
	`
		})
		document.getElementById('repos').innerHTML = output
	}

	showAlert() {
		alert('UPS!..niečo sa pokazilo..')
	}

	clearProfile() {
		this.profile.innerHTML = ''
	}
}
