<script lang="ts">
	interface Props {
		title: string;
		description: string;
		link: string;
	}

	let { title, description, link }: Props = $props();
</script>

<div class="card">
	<h3>{title}</h3>
	<p>{description}</p>
	<a href={link} target="_blank" rel="noopener noreferrer" class="btn">View Project</a>
</div>

<style lang="scss">
	@use '../styles/variables' as *;

	.card {
		border: 1px solid $color-border;
		border-radius: $radius-lg;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: box-shadow $transition-fast, transform $transition-fast;

		&:hover {
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
			transform: translateY(-2px);
		}

		h3 {
			font-size: 1.1rem;
			color: $color-text-dark;
		}

		p {
			font-size: 0.9rem;
			color: $color-text-muted;
			flex: 1;
		}
	}

	.btn {
		display: inline-block;
		padding: 0.45rem 1rem;
		background: $color-primary;
		color: $color-white;
		border-radius: $radius-sm;
		font-size: 0.875rem;
		text-decoration: none;
		align-self: flex-start;
		transition: background $transition-fast;

		&:hover {
			background: $color-primary-dark;
			text-decoration: none;
		}
	}
</style>
