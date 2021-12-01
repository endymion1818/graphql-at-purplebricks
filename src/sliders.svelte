<script>
import items from './items.js';
import { Slidy } from 'svelte-slidy';
import Spinner from './Spinner.svelte'
import SpinNew from './SpinNew.svelte'

let name = 'Slidy',
			index,
			init = false
	
	$: init && (index = 2)
	
	const slidy = {
		slides: items,
		timeout: 1000,
// 		index: 6,
		wrap: {
			id: 'slidy',
			width: '100vw',
			height: '100vh',
			padding: '0',
			align: 'middle',
			alignmargin: 0,
		},
		slide: {
			gap: 0,
			width: '50vw',
			height: '100vh',
			backimg: false,
			imgsrckey: 'src',
			objectfit: 'cover',
			overflow: 'hidden'
		},
		controls: {
			dots: true,
			dotsnum: true,
			dotsarrow: true,
			dotspure: false,
			arrows: false,
			keys: true,
			drag: true,
			wheel: true,
		},
		options: {
			axis: 'y',
			loop: false,
			duration: 350,
		}
	}
</script>

<Slidy {...slidy} bind:index bind:init>
	<span slot="loader">
		<SpinNew />
	</span>
</Slidy>

<style>
	:global(#slidy span) {
		left: 50%;
		transform: translateX(-50%)
	}
	@media screen and (min-width: 900px) {
		:global(#slidy .slidy-ul li) {width: 100vw;}
	}
	@media screen and (max-width: 425px) {
		:global(#slidy .slidy-ul li) {width: 100vw;}
	}
	h1 span {color: red}
	h1 {text-align: center}
</style>