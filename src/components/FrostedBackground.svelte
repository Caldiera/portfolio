<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="frosted">
	{@render children()}
</div>

<style lang="scss">
	@use '../styles/variables' as *;

	.frosted {
		background: rgba(255, 255, 255, 0.04);
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
