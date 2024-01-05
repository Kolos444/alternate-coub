<script lang="ts">
	import Coub from "../../../../components/Coub.svelte";
	import type {CurrentCoub} from "$lib/types";
	import Timeline from "../../../../components/Timeline.svelte";

	export let data;
</script>

<svelte:head>
	<title>Bookmarks</title>
	<meta name="description"
		  content="This is an alternate Frontend for the Website Coub, optimised for a
		  nice desktop experience. Watch your bookmarks on this page."/>
</svelte:head>

<Timeline data={data}/>
