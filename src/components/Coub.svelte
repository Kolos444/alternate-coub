<script lang="ts">
	import type {Coub, CurrentCoub} from "$lib/types";
	import VideoPlayer from "./VideoPlayer.svelte";
	import Tags from "./Tags.svelte";

	export let coub: Coub;
	export let path: string;
	export let loggedIn = false;
	export let autoPlay = true;
	export let currentCoub: CurrentCoub;
	let coubContainer: HTMLDivElement;


	let videoPlayer: VideoPlayer;

	export function getVideoPlayer() {
		return videoPlayer;
	}
	export function getCoubContainer() {
		return coubContainer;
	}
</script>

<svelte:options accessors={true}/>

<div class="container" bind:this={coubContainer}>
	<VideoPlayer coub={coub} path={path} loggedIn={loggedIn} autoPlay={autoPlay} currentCoub={currentCoub} bind:this={videoPlayer}/>
	<div class="row--one">
		<h1>{coub.title}</h1>

	</div>
	<div class="row--two">
		<Tags coub={coub}/>
		<div>{ (coub.likes_count / (coub.likes_count + coub.dislikes_count)).toLocaleString("de-DE", {
			style: "percent",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})}
		</div>
		<div>Uploaded by: {coub.channel.title}</div>
		<div class="views-container">Views: {coub.views_count.toLocaleString("de-DE")}</div>
		<a href="https://coub.com/view/{coub.permalink}" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd"
					  d="M46 23.171c0 12.703-10.297 23-23 23-.61 0-1.214-.023-1.811-.07l2.262-6.216c.374-1.026 1.619-2.4 2.719-3.615l.007-.008c.631-.694 1.175-1.294 1.383-1.648.93-1.583 3.63-6.114 4.036-6.796.031-.052.05-.082.051-.086.628-.9 1.636-2.44 2.257-3.444l3.392-5.512c.621-1.008.668-2.272.105-2.818a.97.97 0 00-.344-.215c-.622-.226-1.449.14-2.057.913l-3.41 4.756c-.395.501-.836.912-1.263 1.31-.356.331-.722.674-1.05 1.056l-.35.408a.24.24 0 01-.165.083.44.44 0 01-.18-.024c-.122-.045-.318-.183-.265-.617v-.004c.03-.132.582-2.57-.975-3.226l-.07-.027c-.855-.311-1.537.224-2.293 1.124-.114.135-.346.148-.464.105a.447.447 0 01-.28-.54c.27-1.208-.228-2.337-1.184-2.685l-.074-.024c-.831-.267-1.835.074-2.437.834a.24.24 0 01-.078.064c-.12.114-.325.273-.548.192-.24-.087-.296-.378-.318-.59l-.027-.263c-.026-.26-.059-.56-.097-.882l-.001-.01c-.12-1.051-.268-2.357-.244-3.225l.367-6.188c.025-.904-.39-1.675-1.034-1.909a1.204 1.204 0 00-.569-.062c-.91.117-1.692 1.149-1.78 2.35l-.676 6.257c-.047.633-.032 1.518-.018 2.373v.002c.011.634.022 1.233.007 1.717l-.06 1.996c-.02.672-.235 1.154-.638 1.432-.223.157-.97.694-1.78 1.449-.077.072-.156.141-.233.21l-.034.03c-.597.529-1.112.986-1.162 2.504-.026.713.007 1.438.11 2.502.107 1.118.437 1.819.788 2.56.056.12.12.248.185.38.515 1.038 1.219 2.456.634 4.063l-2.408 6.614C4.37 38.7 0 31.446 0 23.171c0-12.702 10.297-23 23-23s23 10.298 23 23z"
					  fill="#0332FF"></path>
				<path fill-rule="evenodd" clip-rule="evenodd"
					  d="M21.189 46.101l2.262-6.216c.374-1.026 1.619-2.4 2.719-3.614l.007-.008c.631-.695 1.175-1.295 1.382-1.648a1968.883 1968.883 0 014.088-6.883c.628-.9 1.636-2.44 2.257-3.444l3.392-5.512c.621-1.008.668-2.272.105-2.818a.972.972 0 00-.344-.215c-.622-.226-1.449.14-2.057.914l-3.41 4.755c-.395.501-.836.912-1.263 1.31-.356.331-.722.674-1.05 1.056l-.35.408a.24.24 0 01-.165.083.443.443 0 01-.18-.024c-.123-.044-.318-.183-.265-.617v-.004c.03-.132.582-2.57-.975-3.226l-.07-.027c-.855-.311-1.537.224-2.293 1.124-.114.135-.347.148-.464.105a.447.447 0 01-.28-.54c.27-1.208-.228-2.337-1.184-2.685l-.074-.024c-.831-.267-1.835.075-2.437.834a.241.241 0 01-.078.064c-.12.114-.325.273-.548.192-.24-.087-.296-.378-.318-.59l-.027-.262c-.026-.26-.06-.56-.097-.883l-.001-.01c-.12-1.05-.268-2.356-.244-3.225l.367-6.188c.025-.904-.39-1.674-1.035-1.909a1.204 1.204 0 00-.568-.062c-.91.117-1.692 1.15-1.78 2.35l-.676 6.257c-.047.633-.032 1.518-.018 2.373v.002c.011.634.022 1.233.007 1.717l-.06 1.996c-.02.672-.235 1.154-.638 1.432-.223.157-.97.694-1.78 1.449-.077.072-.156.141-.233.21l-.034.03c-.597.53-1.112.986-1.162 2.504-.026.713.007 1.438.11 2.502.107 1.118.437 1.819.788 2.56.056.121.12.248.185.38.515 1.039 1.219 2.456.634 4.063l-2.408 6.614a22.861 22.861 0 0010.263 3.35z"
					  fill="#fff"></path>
			</svg>
		</a>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: 0 auto;
		max-height: 100vh;
	}

	h1 {
		margin: 0;
		text-align: center;
	}

	.row--one {
		display: grid;
		grid-template-columns: auto min-content min-content;
		grid-column-gap: 1rem;
		width: 100%;
	}

	.row--one > * {
		justify-self: center;
		align-self: center;
	}

	.row--two {
		margin-top: 2px;

		display: grid;
		grid-template-columns: auto max-content max-content max-content max-content;
		grid-column-gap: 1rem;
		width: 100%;
		align-items: center;
	}
</style>