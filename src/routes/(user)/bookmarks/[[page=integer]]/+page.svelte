<script lang="ts">
	import Coub from "../../../../components/Coub.svelte";
	import type {CurrentCoub} from "$lib/types";

	export let data;
	let currentCoub: CurrentCoub = {value: 0, references: []};


	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			default:
				break;
			case "ArrowUp":
				e.preventDefault();
				coubs[currentCoub.value - 1].getCoubContainer().scrollIntoView();
				break;
			case "ArrowDown":
				e.preventDefault();
				coubs[currentCoub.value + 1].getCoubContainer().scrollIntoView();
				break;
			case "ArrowLeft":
				e.preventDefault();
				if (1 >= data.page)
					break;
				break;
			case "ArrowRight":
				e.preventDefault();
				break;
		}
	};

	let coubs: Coub[] = [];

	data.root?.coubs.forEach((value, index) => {
		currentCoub.references[index] = value.id;
	});
</script>

<svelte:head>
	<title>Bookmarks</title>
	<meta name="description"
		  content="This is an alternate Frontend for the Website Coub, optimised for a
		  nice desktop experience. Watch your bookmarks on this page."/>
</svelte:head>

<svelte:window on:keydown={onKeyDown}/>

<div>
	{#if data.root}
		{#each data.root.coubs as coub, i}
			{#key coub.id}
				{#if i !== 0}
					<hr/>
				{/if}
				<Coub coub={coub} path="../" loggedIn={data.validToken} autoPlay={true} currentCoub={currentCoub}
					  bind:this={coubs[i]}/>
			{/key}
		{/each}
	{/if}
</div>

<style>div {
	margin: 1rem
}
</style>