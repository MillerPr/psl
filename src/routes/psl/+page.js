export async function load({ fetch }) {
	const response = await fetch('https://bibnum.explore.psl.eu/iiif/3/25dm5/manifest');
	if (!response.ok) {
		throw new Error('Response failed!');
	}
	const data = await response.json();
	return data;
}
