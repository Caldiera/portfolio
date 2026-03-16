<script lang="ts">
	import FrostedBackground from './FrostedBackground.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
		background?: string;
		padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		target?: string;
	}

	let { href, children, background = 'rgba(0, 0, 0, 0.05)', padding = 'sm', target }: Props = $props();
</script>

<a {href} {target} class="frosted-button">
	<FrostedBackground {background} {padding}>
		{@render children()}
	</FrostedBackground>
</a>

<style>
	.frosted-button {
		display: inline-block;
		text-align: center;
		text-decoration: none;
		color: var(--color-text);
		font-family: var(--font-heading);
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
		transition: transform 0.2s, box-shadow 0.2s;

		&:hover {
			transform: scale(1.02);
			box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.32);
		}

		&:active {
			transform: scale(0.98);
			box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
		}
	}
</style>
