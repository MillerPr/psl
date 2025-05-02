export const load = async ({ fetch, params }) => {
	const match = params.slug.match(/'.*'/);
	const apiUrl = match ? match[1] : params.slug;
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(response.status.toString());
		}
		const dataResults = await response.json();

		return dataResults;
	} catch (error) {
		console.error('Error fetching from site:', error);
		throw error;
	}
};
