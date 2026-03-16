<nav>
	<a href="/" class="brand">Brandon Marques</a>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/projects">Projects</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem var(--padding-x);
		border-bottom: 1px solid var(--color-border);
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.brand {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--color-text);
		text-decoration: none;
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;

		a {
			color: var(--color-text);
			font-size: 0.95rem;
			text-decoration: none;
			transition: color var(--transition-fast);

			&:hover {
				color: var(--color-primary);
			}
		}
	}
</style>
