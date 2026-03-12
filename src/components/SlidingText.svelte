<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		text: string;
		startScroll?: number;
		scrollDuration?: number;
		direction?: 'left' | 'right';
	}

	let { text, startScroll = 0, scrollDuration = 400, direction = 'left' }: Props = $props();

	let translateX = $state(0);

	onMount(() => {
		function onScroll() {
			const progress = Math.max(0, Math.min(1, (window.scrollY - startScroll) / scrollDuration));
			translateX = (direction === 'left' ? -1 : 1) * progress * 100;
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="wrapper">
	<h1 style="transform: translateX({translateX}vw)">{text}</h1>
</div>

<style lang="scss">
	@use '../styles/variables' as *;

	h1 {
		font-size: clamp(6rem, 20vw, 15rem);
		color: $color-text;
		font-weight: normal;
		line-height: 1;
		letter-spacing: -0.02em;
		will-change: transform;
		white-space: nowrap;
		margin-left: -1.2rem;
	}
</style>
