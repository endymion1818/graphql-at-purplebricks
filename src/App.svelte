<script lang="ts">
	import Sliders from "./Sliders.svelte";

	export let name: string;
</script>

<main>
	<Sliders/>
</main>

<style>
	:global(body) {
		padding: 0;
	}
	main {
		margin: 0 auto;
	}
</style>