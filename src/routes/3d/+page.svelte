<script lang="ts">
	import StlViewer from '$components/StlViewer.svelte';
	import test from '$lib/stl/test.stl?url';
	import desk from '$lib/stl/desk.stl?url';
	import drawer from '$lib/stl/drawer.stl?url';
	import coffee1 from '$lib/stl/coffee1.stl?url';
	import coffee2 from '$lib/stl/coffee2.stl?url';
	import coffee3 from '$lib/stl/coffee3.stl?url';
</script>

<svelte:head>
	<title>3D Projects — Brandon Marques</title>
</svelte:head>

<section>
	<h1>3D Projects</h1>
	<p class="subtitle">Things I've designed in my spare time.</p>
	<div class="grid">
		<StlViewer src={desk} colspan={3} rowspan={3} description="SLEEK ELEGANT TABLE" />
		<StlViewer src={drawer} colspan={2} description="Laser cut steel bedside table" />
		<StlViewer src={coffee1} colspan={3} rowspan={2} description="Coffee table trolley" />
		<StlViewer src={coffee2} colspan={1} />
		<StlViewer src={coffee3} colspan={1} />
	</div>
</section>

<style>
	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: var(--color-text-dark);
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: var(--color-text-muted);
		margin-bottom: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
	}
</style>
