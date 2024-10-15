

export const mutationLogin = async () => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTcyOTAxMDgzNi40MjY1MDQsInN1YiI6IjY1ZWYzMDU2YWY1OGNiMDE4NjJiZTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fd2L5l2QZNk2BDMbG_y0TVc9n-RLeBD9MRiPuoaE2E'
		}
	};

	const res = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', options)

	return res.json()
}