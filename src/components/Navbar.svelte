<nav>
	<a href="/" class="brand">Alex Carter</a>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/projects">Projects</a></li>
	</ul>
</nav>

<style lang="scss">
	@use '../styles/variables' as *;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem $padding-x;
		border-bottom: 1px solid $color-border;
		max-width: $max-width;
		margin: 0 auto;
	}

	.brand {
		font-weight: 700;
		font-size: 1.25rem;
		color: $color-text;
		text-decoration: none;
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;

		a {
			color: $color-text-mid;
			font-size: 0.95rem;
			text-decoration: none;
			transition: color $transition-fast;

			&:hover {
				color: $color-primary;
			}
		}
	}
</style>
