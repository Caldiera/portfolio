<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		text: string;
		exitTrigger?: number;
		returnTrigger?: number;
		scrollDuration?: number;
		direction?: 'left' | 'right';
	}

	let {
		text,
		exitTrigger = 0,
		returnTrigger,
		scrollDuration = 800,
		direction = 'left'
	}: Props = $props();

	let translateX = $state(0);

	onMount(() => {
		let current = 0;
		let target = 0;
		let rafId: number;
		const offScreen = (direction === 'left' ? -1 : 1) * 100;
		const lerp = 1 - Math.pow(0.05, 16 / scrollDuration);

		function tick() {
			const scrollY = window.scrollY;

			if (scrollY >= exitTrigger) {
				target = offScreen;
			} else if (returnTrigger === undefined || scrollY < returnTrigger) {
				target = 0;
			}

			const activeLerp = target === offScreen ? lerp * 0.3 : lerp;
			current += (target - current) * activeLerp;
			translateX = current;
			rafId = requestAnimationFrame(tick);
		}

		rafId = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(rafId);
	});
</script>

<div class="wrapper">
	<h1 style="transform: translateX({translateX}vw)">{text}</h1>
</div>

<style>
	.wrapper {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		text-align: center;
	}

	h1 {
		font-size: clamp(6rem, 20vw, 15rem);
		color: var(--color-text);
		font-weight: bold;
		line-height: 1;
		letter-spacing: -0.02em;
		will-change: transform;
		white-space: nowrap;
		display: inline-block;
	}
</style>
