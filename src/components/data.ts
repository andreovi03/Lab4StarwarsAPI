export async function traer_api() {
	try {
			const swa = await fetch('https://swapi.dev/api/planets/').then((res) => {
				return res.json();
			});
			return swa.results;
	} catch (error) {
		console.log(error);
	}
}