<script lang="ts">

	import {
		hideCoubBelowPercent,
		hideCoubBelowViews,
		hideCoubsWithTags,
		playerHeight,
		playerWidth,
		startPlaybackAtPercent
	} from "$lib/stores/settings";
</script>

<label for="coubsPerPage">Coubs per page</label>
<select name="coubsPerPage" id="coubsPerPage">
	<option value="10">10</option>
	<option value="25">25</option>
	<option value="50">50</option>
	<option value="100">100</option>
</select>

<section>
	<label for="hideCoubsBelow">Hide coubs Below Percentage</label>
	<input type="range" name="hideCoubsBelow" id="hideCoubsBelow" min="0" max="1" step="0.01"
		   bind:value={$hideCoubBelowPercent}>

	<label for="hideCoubsBelowViews">Hide Coubs below Views</label>
	<input type="number" name="hideCoubsBelowViews" id="hideCoubsBelowViews" min="0" bind:value={$hideCoubBelowViews}>

	<label for="hideTags">Hide Coubs with these Tags |seperate with semicolon</label>
	<textarea name="hideTags" id="hideTags" cols="30" rows="10" bind:value={$hideCoubsWithTags}></textarea>

	<label for="maxDimensions">Video Player Maximum Dimensions</label>
	<form id="maxDimensions">
		<input type="range" name="playerWidth" id="playerWidth" min="0" max="1" step="0.01" bind:value={$playerWidth}>
		<input type="range" name="playerHeight" id="playerHeight" min="0" max="1" step="0.01"
			   bind:value={$playerHeight}>
	</form>

	<label for="startPlaybackAtPercent">Start Playback when you see Percentage of the Player</label>
	<input type="range" name="startPlaybackAtPercent" id="startPlaybackAtPercent" min="0" max="1" step="0.01"
		   bind:value={$startPlaybackAtPercent}>

</section>


<style>
	section {
		display: table-caption;
		margin: 1rem;
	}
</style>