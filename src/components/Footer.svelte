<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<p class="name">Alex Carter</p>
	<p class="copy">&copy; {year} All rights reserved.</p>
	<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</footer>

<style lang="scss">
	@use '../styles/variables' as *;

	footer {
		text-align: center;
		padding: $padding-y $padding-x;
		border-top: 1px solid $color-border;
		font-size: 0.875rem;
		color: $color-text-muted;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		align-items: center;

		a {
			color: $color-text-muted;
			font-size: 0.8rem;

			&:hover {
				color: $color-primary;
			}
		}
	}

	.name {
		font-weight: 600;
		color: $color-text-sub;
	}
</style>
