<script lang="ts">

	import VolumeSlider from "./VolumeSlider.svelte";
	import type {Coub} from "$lib/types";
	import UserActions from "./UserActions.svelte";

	export let loggedIn: boolean;
	export let coub: Coub;
	export let path: string;
	export let resetFunction: () => void;
</script>

<div class="hover">
	<div class="container">
		<VolumeSlider/>
		{#if loggedIn}
			<UserActions coub={coub} path={path}/>
		{/if}
		<button on:click={resetFunction}>
			<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd"
					  d="M15.707 8.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L14.414 12H16a5.5 5.5 0 11-5.5 5.5 1 1 0 10-2 0A7.5 7.5 0 1016 10h-1.586l1.293-1.293z"
					  fill="#fff"></path>
			</svg>
		</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;

		opacity: 0;

		transition: .3s;
	}

	.hover {
		position: absolute;
		right: 0;
		top: 0;

		padding: 1rem;
	}

	.hover:hover .container {
		opacity: 1;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		padding: 0;
	}

	button:hover {
		background: rgba(34, 34, 34, 0.2);
		border-radius: 50%;
	}
</style>