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
		background: rgba(255, 255, 255, 0.04);
		border-radius: 16px;
		box-shadow:
			0 4px 30px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(7.7px);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition:
			box-shadow $transition-fast,
			transform $transition-fast;

		&:hover {
			box-shadow:
				0 4px 24px rgba(0, 0, 0, 0.2),
				inset 0 1px 0 rgba(255, 255, 255, 0.2),
				inset 0 -1px 0 rgba(0, 0, 0, 0.1);
			transform: translateY(-2px);
		}

		h3 {
			font-size: 1.1rem;
			color: #ffffff;
		}

		p {
			font-size: 0.9rem;
			color: rgba(255, 255, 255, 0.75);
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
