<script lang="ts">
	import {enhance} from "$app/forms";
	export let data;
</script>

{#if !data.validToken}
	<dialog open>
		<form method="POST" action="..?/token" use:enhance>
			<input type="text" name="rememberTokenInput" id="rememberToken">
			<input type="submit" value="send">
		</form>
	</dialog>
{/if}

<slot/>