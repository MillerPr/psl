<script>
	let { query } = $props();
	import { page } from '$app/state';
</script>

<div class="container flex flex-col items-center">
	<h1>PSL Download Page</h1>

	<div class="mt-8">
		<form action="{page.url.pathname}/{query}" method="GET">
			<input bind:value={query} placeholder="Paste IIIF Manifest" />
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
