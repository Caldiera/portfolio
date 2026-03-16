<script lang="ts">
	import StlViewer from '$components/StlViewer.svelte';
	import test from '$lib/stl/test.stl?url';
</script>

<svelte:head>
	<title>3D Projects — Brandon Marques</title>
</svelte:head>

<section>
	<h1>3D Projects</h1>
	<p class="subtitle">Things I've designed in my spare time.</p>
	<div class="grid">
		<StlViewer src={test} colspan={2} rowspan={2} />
		<StlViewer src={test} colspan={4} />
		<StlViewer src={test} colspan={1} />
		<StlViewer src={test} colspan={1} />
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
