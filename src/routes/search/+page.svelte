<script>
	let { query } = $props();
	import { page } from '$app/state';
</script>

<div class="container flex flex-col items-center">
	<h1>PSL Download Page</h1>

	<p class="prose">
		Browse and search for image collections on the
		<a href="https://bibnum.explore.psl.eu/s/psl/ark:/18469/25080">PSL website</a>. Copy the IIIF
		manifest of any given collection using the IIIF icon below the viewer.
	</p>
	<p class="prose">
		Enter the unique identifier of the IIIF manifest in the field below, not the entire link. For
		example, if the entire link is: <i
			>https://bibnum.explore.psl.eu/iiif/3/<span class="text-red-600">258mx</span>/manifest</i
		>, then just enter <span class="text-red-600">258mx</span> in the field below.
	</p>
	<p class="prose">
		The search should return a list of image links. I recommend using the Firefox extension called
		<a href="https://addons.mozilla.org/en-US/firefox/addon/downthemall/">DownThemAll</a> to facilitate
		a download of these images. Please respect the license and rights as indicated on the PSL website.
	</p>

	<div class="mt-8">
		<form action="{page.url.pathname}/{query}" method="GET">
			<input bind:value={query} placeholder="Paste IIIF Manifest ID" class="rounded-sm" />
			<button
				class="rounded-sm border-1 border-blue-500 bg-blue-100 p-2 px-4 hover:border-gray-400 hover:bg-gray-400"
				type="submit">Submit</button
			>
		</form>
	</div>
</div>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	h1 {
		font-size: 2rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
