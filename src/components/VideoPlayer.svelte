<script lang="ts">

	import type {Coub, CurrentCoub} from "$lib/types";
	import {volume} from "../stores";
	import VideoPlayerActions from "./VideoPlayerActions.svelte";
	import {onMount} from "svelte";

	export let coub: Coub;
	export let path: string;
	export let loggedIn: boolean;
	export let autoPlay = true;
	export let currentCoub: CurrentCoub | undefined = undefined;

	let video: HTMLVideoElement;
	let audio: HTMLAudioElement;

	export const getVideoElement = () => {
		return video;
	};

	let requestPlayback = false;

	/**
	 * Plays this Coubs Audio and Video
	 */
	export function playCoub() {
		video.play();
		audio.play();
	}

	/**
	 * Pauses this Coubs Audio and Video
	 */
	export function pauseCoub() {
		video.pause();
		audio.pause();
	}

	/**
	 * Sets the current time of the Coub to the specified time.
	 * @param time Second of the Coub
	 */
	const setCoubTime = (time: number) => {
		video.currentTime = time;
		audio.currentTime = time;
	};

	/**
	 * Restarts coub Audio and Video from the start.
	 */
	export function resetCoub() {
		pauseCoub();
		setCoubTime(0);
		playCoub();
	}

	/**
	 * Starts playing Coub if paused and pauses if already playing.
	 */
	export const playPause = () => {

		if (video.paused) {
			if (video.readyState === 4 && audio.readyState === 4) {
				playCoub();
			}
		} else {
			pauseCoub();
		}

	};

	const videoReadyEvent = () => {
		if (requestPlayback && audio.readyState === 4)
			playCoub();
	};

	const audioReadyEvent = () => {
		if (requestPlayback && video.readyState === 4)
			playCoub();
	};

	$:// noinspection CommaExpressionJS
		$volume, (() => {
			if (audio)
				audio.volume = $volume;
		})();

	onMount(() => {
		console.log("test");
		if (autoPlay) {
			const observer = new IntersectionObserver(
				(entries,) => {
					if (entries[0].isIntersecting) {
						if (currentCoub) {
							console.log("test",currentCoub.references.indexOf(coub.id),currentCoub,coub.id);
							currentCoub.value = currentCoub.references.indexOf(coub.id);
						}else{
							console.log(false);
						}

						if (video.readyState !== 4 || audio.readyState !== 4) {
							requestPlayback = true;

							//Pretend to play video and audio to force loading of both
							playCoub();
							pauseCoub();
							setCoubTime(0);

							return;
						}

						playCoub();
					} else {
						requestPlayback = false;

						pauseCoub();
					}
				}
				, {
					threshold: .6
				});
			observer.observe(video);
		}

	});
</script>

<svelte:options accessors={true}/>

<div class="wrapper">
	<video loop bind:this={video} on:click={playPause} on:canplaythrough={videoReadyEvent}>

		<source src={coub.file_versions.html5.video.high.url}>
		<source src={coub.file_versions.html5.video.med.url}>

		<audio bind:this={audio} on:ended={resetCoub} on:canplaythrough={audioReadyEvent}>
			<source src={coub.file_versions.html5.audio.high.url}>
			<source src={coub.file_versions.html5.audio.med.url}>
		</audio>

		<track src="" kind="captions">
	</video>
	<VideoPlayerActions coub={coub} path={path} loggedIn={loggedIn} resetFunction={resetCoub}/>
</div>

<style>
	.wrapper {
		max-width: 80%;

		position: relative;
		margin: 0 auto;
	}

	video {
		max-height: 90vh;
		height: auto;
		width: 100%;

		background: black;
	}
</style>