<script lang="ts">
	import Slider from "./Slider.svelte";

	export let name: string;
</script>

<main>
	<Slider />
</main>

<style>
	:global(body) {
		padding: 0;
	}
	main {
		margin: 0 auto;
	}
	:global(a) {
        color: #e11098;
        text-decoration: underline;
        text-decoration-skip-ink: auto;
    }
</style>