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
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>