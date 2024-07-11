<script lang="ts">
	import Timeline from "$components/Timeline.svelte";

	export let data;
</script>

<svelte:head>
	<title>Tag - {data.tag}</title>
	<meta name="description"
		  content="This is an alternate Frontend for the Website Coub, optimised for a
		  nice desktop experience. Watch COubs with the {data.tag} tag on this page."/>
</svelte:head>

<Timeline data={data}/>

<style>
</style>