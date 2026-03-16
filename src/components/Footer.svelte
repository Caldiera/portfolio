<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<p class="name">Brandon Marques</p>
	<p class="copy">&copy; {year} All rights reserved.</p>
	<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</footer>

<style>
	footer {
		text-align: center;
		padding: var(--padding-y) var(--padding-x);
		border-top: 1px solid var(--color-border);
		font-size: 0.875rem;
		color: var(--color-text-muted);
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		align-items: center;

		a {
			color: var(--color-text-muted);
			font-size: 0.8rem;

			&:hover {
				color: var(--color-primary);
			}
		}
	}

	.name {
		font-weight: 600;
		color: var(--color-text-dark);
	}
</style>
