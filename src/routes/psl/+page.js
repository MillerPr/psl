export async function load({ fetch }) {
	const response = await fetch('/psl.json');
	if (!response.ok) {
		throw new Error('Response failed!');
	}
	const data = await response.json();
	return data;
}
