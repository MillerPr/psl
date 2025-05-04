<script>
	import { page } from '$app/stores';
	import JSZip from 'jszip';

	const { data } = $props();
	let imageCount = $state(0);

	let { slug } = $page.params;

	async function downloadImage(url, filename) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const blob = await response.blob();
			const objectUrl = URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.href = objectUrl;
			link.download = filename;

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			URL.revokeObjectURL(objectUrl);
		} catch (error) {
			console.error('Error downloading image:', error);
		}
	}

	async function downloadAllImages() {
		console.log('Downloading all images...');

		const zip = new JSZip();
		const imagesToDownload = [];

		let imageIndex = 0;
		for (const image of data.items) {
			for (const image_2 of image.items) {
				for (const image_3 of image_2.items) {
					if (image_3?.body?.id) {
						imageIndex++;
						const url = `${image_3.body.id.substring(0, image_3.body.id.indexOf('full/') + 'full/'.length)}${image.width},/0/default.jpg`;
						const filename = image_3.body.id.replaceAll('https://', '').replaceAll('/', '_');
						imagesToDownload.push({ url, filename });
					}
				}
			}
		}

		const promises = imagesToDownload.map(async ({ url, filename }) => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
					return;
				}
				const blob = await response.blob();
				zip.file(filename, blob);
			} catch (error) {
				console.error(`Error processing image ${url}:`, error);
			}
		});

		try {
			console.log('Fetching images...');
			await Promise.all(promises);
		} catch (error) {
			console.error('Error during image fetching/zipping process:', error);
			return;
		}

		if (Object.keys(zip.files).length === 0) {
			console.warn('No images were successfully added to the zip file.');
			return;
		}

		try {
			const zipBlob = await zip.generateAsync({ type: 'blob' });

			const zipUrl = URL.createObjectURL(zipBlob);

			const link = document.createElement('a');
			link.href = zipUrl;
			link.download = `${slug || 'download'}_images.zip`;

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			URL.revokeObjectURL(zipUrl);

			console.log('Zip file downloaded successfully!');
		} catch (error) {
			console.error('Error generating or downloading the zip file:', error);
		}
	}
</script>

<div class="container mx-auto">
	<p class="my-4 text-2xl">PSL images from IIIF manifest</p>
	<button
		onclick={() => {
			downloadAllImages();
		}}
		class="my-4 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
	>
		Download {data.items.reduce((acc, image) => {
			return (
				acc +
				image.items.reduce((acc2, image_2) => {
					return acc2 + image_2.items.filter((image_3) => image_3?.body?.id && image?.width).length;
				}, 0)
			);
		}, 0)} images
	</button>
	<ol style="list-style:decimal">
		{#each data.items as image, index}
			{#each image.items as image_2}
				{#each image_2.items as image_3}
					{#if image_3?.body?.id && image?.width}
						<li>
							<button
								class="image-button cursor-pointer"
								onclick={() => {
									downloadImage(
										`${image_3.body.id.substring(0, image_3.body.id.indexOf('full/') + 'full/'.length)}${image.width},/0/default.jpg`,
										image_3.body.id.replaceAll('https://', '').replaceAll('/', '_')
									);
								}}>{image_3.body.id}</button
							>
						</li>
					{/if}
				{/each}
			{/each}
		{/each}
	</ol>
</div>
