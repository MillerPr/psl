<script>
	const { data } = $props();
	$inspect(data);
</script>

<div class="container mx-auto">
	<p>PSL</p>
	<ol style="list-style:decimal">
		{#each data.items as image, i}
			{#each image.items as image_2}
				{#each image_2.items as image_3}
					{#if image_3?.body?.id && image?.width}
						<li>
							<a
								href={`${image_3.body.id.substring(0, image_3.body.id.indexOf('full/') + 'full/'.length)}${image.width},/0/default.jpg`}
								>{image_3.body.id}</a
							>
						</li>
					{/if}
				{/each}
			{/each}
		{/each}
	</ol>
</div>
