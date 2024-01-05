<script>
	import Coub from "../../../components/Coub.svelte";

	export let data;
</script>

{#if data.coub}
	<Coub coub={data.coub} path="/coub" autoPlay={true} loggedIn={data.validToken}/>
{/if}