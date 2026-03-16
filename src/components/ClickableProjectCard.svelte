<script lang="ts">
	import FrostedBackground from './FrostedBackground.svelte';
	import FrostedButton from './FrostedButton.svelte';
	import colors from '$styles/_variables.module.scss';
	import type { MaterialSymbol } from '$lib/icons';

	interface Props {
		title: string;
		description: string;
		link: string;
		buttonText: string;
		buttonIcon?: MaterialSymbol;
		image?: string;
	}

	let { title, description, link, buttonText, buttonIcon, image }: Props = $props();

	let hovered = $state(false);
	let background = $derived(hovered ? colors.frostedMedium : colors.frostedVeryLight);
</script>

<div class="card-wrapper">
	<FrostedBackground {background}>
		<div class="card">
			<h3>
				<a href={link} onmouseenter={() => (hovered = true)} onmouseleave={() => (hovered = false)}
					>{title}</a
				>
			</h3>
			{#if image}
				<img src={image} alt={title} class="card-image" />
			{/if}
			<p>{description}</p>
			<FrostedButton href={link} background={colors.frostedMedium} padding="xs">
				<span class="btn-content">
					{buttonText}
					{#if buttonIcon}
						<span class="material-symbols-rounded" aria-hidden="true">{buttonIcon}</span>
					{/if}
				</span>
			</FrostedButton>
		</div>
	</FrostedBackground>
</div>

<style lang="scss">
	@use 'src/styles/_variables.scss' as *;

	.card-wrapper {
		position: relative;
		height: 100%;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		height: 100%;

		h3 {
			font-size: 1.1rem;

			a {
				color: #ffffff;
				text-decoration: none;

				/* Stretch the link over the entire card */
				&::after {
					content: '';
					position: absolute;
					inset: 0;
				}
			}
		}

		p {
			font-size: 0.9rem;
			color: rgba(255, 255, 255, 0.75);
			flex: 1;
		}

		/* Lift interactive elements above the stretched link */
		:global(a.frosted-button) {
			position: relative;
			z-index: 1;
		}

		:global(.btn-content) {
			display: inline-flex;
			align-items: center;
			gap: 0.35rem;

			.material-symbols-rounded {
				font-size: 1rem;
				line-height: 1;
			}
		}

		.card-image {
			width: 100%;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			border-radius: var(--radius-lg);
		}
	}
</style>
