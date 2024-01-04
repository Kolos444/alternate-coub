<script lang="ts">
	import {volume} from "../stores";

	const volumeScroll = (e: WheelEvent) => {
		e.preventDefault();

		if (e.deltaY < 0) {
			if ($volume < 0.99)
				$volume += 0.01;
			else    //prevents it from going over 1
				$volume = 1;
		} else if (e.deltaY > 0) {
			if ($volume > 0.01)
				$volume -= 0.01;
			else    //prevents it from going under 0
				$volume = 0;
		}
	};
</script>

<div class="container">
	<!-- Orient vertically on firefox via orient attribute -->
	<input type="range"
		   orient="vertical"
		   min="0.0"
		   max="1.0"
		   step="0.01"
		   bind:value={$volume}
		   on:wheel={volumeScroll}
	>
</div>

<style>
	input {
		height: 300px;
		max-height: 20%;

		/*Orient input vertically on Chrome, Edge and Safari*/
		-webkit-appearance: slider-vertical;
		writing-mode: bt-lr;

		accent-color: blue;
	}

	.container {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
	}
</style>