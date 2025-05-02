<script>
	let { query } = $props();
	import { page } from '$app/state';
</script>

<div class="container flex flex-col items-center">
	<h1>PSL Download Page</h1>
	<p class="prose">
		Just enter the unique identifier portion of the IIIF manifest, not the entire link. For example,
		if the entire link is https://bibnum.explore.psl.eu/iiif/3/<span class="text-red-600"
			>258mx</span
		>/manifest then just enter 258mx.
	</p>

	<div class="mt-8">
		<form action="{page.url.pathname}/{query}" method="GET">
			<input bind:value={query} placeholder="Paste IIIF Manifest ID" />
			<button type="submit">Submit</button>
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
