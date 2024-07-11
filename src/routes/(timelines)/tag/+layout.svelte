<script lang="ts">
	import type {LayoutData} from "./$types";

	export let data: LayoutData;
</script>

<a href="{data.path}/popular">Popular</a>
<a href="{data.path}/likes">Most Likes</a>
<a href="{data.path}/views">Most Views</a>
<a href="{data.path}/recent">Recent</a>
<slot/>