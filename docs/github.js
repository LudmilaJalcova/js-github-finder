class Github {
	constructor() {
		this.client_id = '77e98c3d03c74c3196ab'
		this.client_secret = 'ce1a42bf9a5bd1b3f20bf0c43138d28704d35e3b'
		this.repos_count = 5
		this.repos_sort = 'created: asc'
	}

	// vytvor si asynchornu funkciu s nazvom getUser ktora bude mat vstupny parameter user nasledne v tejto funkci vykonas request pommocou fetch metody
	// prvy request await fetch
	// url = `https://api.github.com/users/${userInputValue}?client_id=${this.client_id}&client_secret=${this.client_secret}`
	// vysledok requestu uloz do konstanty profileResponse
	// nasledne vysledny json vloz do konstatny profile

	// druhy request await fetch
	// url = `https://api.github.com/users/${userInputValue}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
	// vysledok requestu uloz do konstanty repoResponse
	// nasledne vysledny json vloz do konstatny repos

	// a na konci tejto funkcie vratis {profile, repos}

	async getUser(user) {
		// const userInputValue = document.getElementById('inputUserName').value

		const url1 = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`

		const url2 = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`

		// url1 = `https://api.github.com/users/frantallukas10?client_id='77e98c3d03c74c3196ab'&client_secret='ce1a42bf9a5bd1b3f20bf0c43138d28704d35e3b'

		const profileResponse = await fetch(url1)
		const profile = await profileResponse.json()

		const repoResponse = await fetch(url2)
		const repos = await repoResponse.json()

		return { profile, repos }
	}
}
