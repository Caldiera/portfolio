<footer>
	<p class="name">Alex Carter</p>
	<p class="copy">&copy; {year} All rights reserved.</p>
	<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</footer>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<style>
	footer {
		text-align: center;
		padding: 2rem 1.5rem;
		border-top: 1px solid #e5e7eb;
		font-size: 0.875rem;
		color: #6b7280;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		align-items: center;
	}

	.name {
		font-weight: 600;
		color: #374151;
	}

	footer a {
		color: #6b7280;
		font-size: 0.8rem;
	}

	footer a:hover {
		color: #3b82f6;
	}
</style>
