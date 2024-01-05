<script lang="ts">
	import type {CurrentCoub, Root} from "$lib/types";
	import Coub from "./Coub.svelte";

	export let data: { root: Root | undefined, page: number, validToken: boolean };
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

<style>
	div {
		margin: 1rem
	}
</style>