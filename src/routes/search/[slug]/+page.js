export const load = async ({ fetch, params }) => {
	const apiUrl = `https://bibnum.explore.psl.eu/iiif/3/${params.slug}/manifest`;
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
