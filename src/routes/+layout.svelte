<script lang="ts">
	import "./app.css";
</script>

<div>
	<nav>
		<a href="/">
			<enhanced:img src="$lib/image/svg/dark/home.svg" alt="Home" title="Home" width="25px" height="25px"
						  class="icon"/>
			<span>Home</span>
		</a>
		<a href="/bookmarks">
			<enhanced:img src="$lib/image/svg/dark/bookmark.svg" alt="Bookmark" title="Your bookmarked Coubs"
						  width="25px"
						  height="25px" class="icon"/>
			<span>Bookmarks</span>
		</a>
		<a href="/likes">
			<enhanced:img src="$lib/image/svg/dark/like.svg" alt="Like" title="Your liked Coubs" width="25px"
						  height="25px"
						  class="icon"/>
			<span>Likes</span>
		</a>


		<a href="/hot">
			<enhanced:img src="$lib/image/svg/dark/flame.svg" alt="Flame" title="Hot Coubs" width="25px" height="25px"
						  class="icon"/>
			Hot:
		</a>
		<a href="/hot/daily/1">Day</a>
		<a href="/hot/weekly/1">Week</a>
		<a href="/hot/monthly/1">Month</a>
		<a href="/hot/quarterly/1">3 Months</a>
		<a href="/hot/semiannual/1">6 Months</a>
	</nav>
</div>

<slot/>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
	}

	div:hover nav {
		transform: none;
	}

	nav {
		height: 2rem;
		display: flex;
		justify-content: center;
		gap: 2rem;
		padding: 1rem;
		background: #1c1b22;

		transform: translateY(-100%);
		transition: 300ms;
	}

	.icon {
		width: 2rem;
		height: 2rem;
	}

	a {
		font-size: 2rem;
		line-height: 2rem;
		display: flex;
		flex-direction: row;
	}
</style>