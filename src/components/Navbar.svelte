<nav>
	<a href="/" class="brand">Alex Carter</a>
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
		padding: 1rem 1.5rem;
		border-bottom: 1px solid #e5e7eb;
		max-width: 1100px;
		margin: 0 auto;
	}

	.brand {
		font-weight: 700;
		font-size: 1.25rem;
		color: #1a1a1a;
		text-decoration: none;
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;
	}

	ul a {
		color: #4b5563;
		font-size: 0.95rem;
		text-decoration: none;
		transition: color 0.2s;
	}

	ul a:hover {
		color: #3b82f6;
	}
</style>
