<script lang="ts">
	import FrostedBackground from './FrostedBackground.svelte';
	import FrostedButton from './FrostedButton.svelte';
	import colors from '$styles/_variables.module.scss';

	interface Props {
		title: string;
		description: string;
		link: string;
		buttonText: string;
		image?: string;
	}

	let { title, description, link, buttonText, image }: Props = $props();
</script>

<FrostedBackground background={colors.frostedVeryLight}>
	<div class="card">
		<h3>{title}</h3>
		{#if image}
			<img src={image} alt={title} class="card-image" />
		{/if}
		<p>{description}</p>
		<FrostedButton href={link} background={colors.frostedMedium} padding="xs"
			>{buttonText}</FrostedButton
		>
	</div>
</FrostedBackground>

<style lang="scss">
	@use 'src/styles/_variables.scss' as *;

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

		.card-image {
			width: 100%;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			border-radius: $radius-sm;
		}
	}
</style>
