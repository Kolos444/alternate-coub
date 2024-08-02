<script>
	import Coub from "../../../components/Coub.svelte";
	export let data;
</script>

<svelte:head>
	<title>{data.coub?.title}</title>
	<meta name="description"
		  content="This is an alternate Frontend for the Website Coub, optimised for a
		  nice desktop experience. Watch the coub {data.coub?.title} on this page."/>
</svelte:head>

{#if data.coub}
	<Coub coub={data.coub} path="/coub" autoPlay={true} loggedIn={data.validToken}/>
{/if}