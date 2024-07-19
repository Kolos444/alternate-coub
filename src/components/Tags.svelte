<script lang="ts">
	import type {Coub} from "$lib/types";

	export let coub: Coub;
</script>

<div class="tags">
	{#if coub.categories[0]}
		<a href="/category/{coub.categories[0].permalink}">
			<div class="category-container">{coub.categories[0].title}</div>
		</a>
	{/if}
	{#each coub.tags as tag}
		<a href="/tag/{tag.value}/likes">
			<div class="tag-container">
				{tag.title}
			</div>
		</a>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.tag-container, .category-container {
		border-radius: 10px;
		padding: 3px 5px;
	}

	.category-container {
		box-shadow: inset -13px -13px 30px yellow,
		inset 33px 33px 30px yellowgreen;
		color: black;
		font-weight: 700;
	}

	.tag-container {
		box-shadow: inset -13px -13px 30px royalblue,
		inset 33px 33px 30px rebeccapurple;
	}
</style>