<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		background?: string;
		padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	}

	let { children, background = 'rgba(0, 0, 0, 0.05)', padding = 'md' }: Props = $props();
</script>

<div class="frosted {padding}" style="background: {background};">
	{@render children()}
</div>

<style>
	.frosted {
		border-radius: 16px;
		box-shadow:
			0 4px 30px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: box-shadow var(--transition-fast);

		&.xs { padding: 0.25rem; }
		&.sm { padding: 0.75rem; }
		&.md { padding: 1.5rem; }
		&.lg { padding: 2.25rem; }
		&.xl { padding: 3rem; }
	}
</style>
