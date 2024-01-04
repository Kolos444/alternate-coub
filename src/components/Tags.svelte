<script lang="ts">
	import type {Coub} from "$lib/types";

	export let coub: Coub;
</script>

<div class="tags">
	<div class="category-container">{coub.categories[0].title}</div>
	{#each coub.tags as tag}
		<div class="tag-container">
			{tag.title}
		</div>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.category-container {
		box-shadow: inset -13px -13px 30px yellow,
		inset 33px 33px 30px yellowgreen;
		color: black;
		border-radius: 10px;
		padding: 5px;
		margin: 0 10px 0 0;
	}

	.tag-container {
		box-shadow: inset -13px -13px 30px royalblue,
		inset 33px 33px 30px rebeccapurple;
		border-radius: 10px;
		padding: 5px;
		margin: 0 10px 0 0;
	}
</style>