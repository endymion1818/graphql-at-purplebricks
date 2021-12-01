<script>
import items from './items.js';
import { Slidy } from 'svelte-slidy';
import Spinner from './Spinner.svelte'

let styles = {
    'article-bg': 'e9e9e9'
}

let name = 'Slidy',
			index,
			init = false
	
	$: init && (index = 2)
	
	const slidy = {
		slides: items,
		timeout: 1000,
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
			width: '100vw',
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
			drag: false,
			wheel: true,
		},
		options: {
			axis: 'y',
			loop: false,
			duration: 350,
		}
	}
    
</script>

<Slidy {...slidy} bind:index bind:init let:item>
    <div class="slide">
        {#if item.src}
            <img alt="{item.header}" src="{item.src}"/>
        {/if}
        <article class={item.background}>
            <div class="article-content layout-{item.layout}">
                <h1>{item.header}</h1>
                <p>
                    {item.text}
                </p>
            </div>
        </article>
    </div>
	<span slot="loader">
		<Spinner />
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
    .slide {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
    img,
    .background,
    article {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    article {
        height: 100vh;
        width: 100vw;
        display: flex;
        margin: auto;
    }
    article.dark {
        background-color: #333333;
        color: white;
    }
    .article-content {
        margin: auto;
    }
    .layout-2col {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
</style>