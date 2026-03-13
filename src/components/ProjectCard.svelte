<script lang="ts">
	import FrostedBackground from './FrostedBackground.svelte';
	import colors from '$styles/_variables.module.scss';

	interface Props {
		title: string;
		description: string;
		link: string;
	}

	let { title, description, link }: Props = $props();
</script>

<FrostedBackground background={colors.frostedVeryLight}>
	<div class="card">
		<h3>{title}</h3>
		<p>{description}</p>
		<FrostedBackground background={colors.frostedDark}>
			<a href={link} class="btn">View Project</a>
		</FrostedBackground>
	</div>
</FrostedBackground>

<style lang="scss">
	@use '../styles/variables' as *;

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

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
