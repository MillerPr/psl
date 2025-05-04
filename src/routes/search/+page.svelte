<script>
	import { goto } from '$app/navigation';

	let { query } = $props();
</script>

<main
	class="prose container flex flex-col items-center gap-4 self-center justify-self-center py-10"
>
	<h1 class="!my-0 !mb-4">PSL Download Page</h1>
	<p class="!my-0">
		Browse and search for image collections on the
		<a href="https://bibnum.explore.psl.eu/s/psl/ark:/18469/25080" target="_blank">PSL website</a>.
		Copy the IIIF manifest of any given collection using the IIIF icon below the viewer.
	</p>
	<p class="!my-0">
		Enter the unique identifier of the IIIF manifest in the field below, not the entire link. For
		example, if the entire link is: <span class="italic"
			>https://bibnum.explore.psl.eu/iiif/3/<span class="text-red-600">258mx</span>/manifest</span
		>, then just enter <span class="text-red-600">258mx</span> in the field below.
	</p>
	<p class="!my-0">
		The search should return a list of image links. If you want to download the images, please
		respect the license and rights as indicated on the PSL website.
	</p>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			goto(`/search/${query}`);
		}}
		class="mt-6 flex w-full flex-row gap-2"
	>
		<input
			bind:value={query}
			placeholder="Paste IIIF Manifest ID"
			class="w-full rounded-sm border-none ring"
		/>
		<button
			class="cursor-pointer rounded-sm bg-blue-100 px-4 ring ring-blue-500 transition-colors hover:bg-blue-200 active:bg-blue-300"
			type="submit">Submit</button
		>
	</form>
</main>
