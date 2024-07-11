<script lang="ts">
	import type {CurrentCoub, Root} from "$lib/types";
	import Coub from "./Coub.svelte";
	import {page} from "$app/stores";
	import {goto} from "$app/navigation";

	export let data: { root: Root | undefined, page: number, validToken: boolean };
	let currentCoub: CurrentCoub = {value: 0, references: []};
	let coubs: Coub[] = [];

	$: $page, data.root?.coubs.forEach((value, index) => {
		currentCoub.references[index] = value.id;
	});


	let pathWithoutPage = $page.url.pathname.lastIndexOf("/") > 0 ?
		$page.url.pathname.slice(0, $page.url.pathname.slice(1).lastIndexOf("/") + 1) :
		$page.url.pathname;

	const scrollBehaviour: ScrollIntoViewOptions = {
		behavior: "smooth",
		block: "center",
		inline: "start"
	};

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			default:
				break;
			case "ArrowUp":
			case "KeyW":
				e.preventDefault();
				coubs[currentCoub.value - 1].getVideoPlayer().getVideoElement().scrollIntoView(scrollBehaviour);
				break;
			case "ArrowDown":
			case "KeyS":
				e.preventDefault();
				coubs[currentCoub.value + 1].getVideoPlayer().getVideoElement().scrollIntoView(scrollBehaviour);
				break;
			case "ArrowLeft":
			case "KeyA":
				if (data.page <= 1)
					break;
				e.preventDefault();
				goto(`${pathWithoutPage}/${data.page - 1}`);
				break;
			case "ArrowRight":
			case "KeyD":
				e.preventDefault();
				goto(`${pathWithoutPage}/${data.page + 1}`);
				break;
			case "MediaPlayPause":
			case "Space":
				e.preventDefault();
				coubs[currentCoub.value].getVideoPlayer().playPause();
				break;
			case "Backspace":
				coubs[currentCoub.value].getVideoPlayer().resetCoub();
				break;
		}
	};
</script>

<svelte:window on:keydown={onKeyDown}/>

<div>
	{#if data.root}
		{#each data.root.coubs as coub, i}
			{#key coub.id}
				{#if i !== 0}
					<hr/>
				{/if}
				<Coub {coub} path={$page.url.origin} loggedIn={data.validToken} autoPlay={true} {currentCoub}
					  bind:this={coubs[i]}/>
			{/key}
		{/each}
	{/if}
</div>

{#if data.page > 1}
	<a href="{`${pathWithoutPage}/${data.page - 1}`}">Previous</a>
{/if}
<a href="{`${pathWithoutPage}/${data.page + 1}`}">Next</a>

<style>
	div {
		margin: 1rem
	}
</style>