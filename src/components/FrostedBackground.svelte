<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		background?: string;
	}

	let { children, background = 'rgba(0, 0, 0, 0.05)' }: Props = $props();
</script>

<div class="frosted" style="background: {background};">
	{@render children()}
</div>

<style lang="scss">
	@use '../styles/variables' as *;

	.frosted {
		border-radius: 16px;
		box-shadow:
			0 4px 30px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: box-shadow $transition-fast;
		padding: 1.5rem;
	}
</style>
