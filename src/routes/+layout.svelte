<script>
	import '../app.css';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';

	let { children } = $props();
</script>

<ProgressBar class="text-sky-500" displayThresholdMs={300} />
{@render children()}
