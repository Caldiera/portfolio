<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Projects — Brandon Marques</title>
</svelte:head>

<section>
	<h1>Projects</h1>
	<p class="subtitle">A collection of things I've built.</p>
	<div class="grid">
		{#each projects as project}
			<ProjectCard title={project.title} description={project.description} link={`/projects/${project.slug}`} />
		{/each}
	</div>
</section>

<style lang="scss">
	@use '../../styles/variables' as *;

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: $color-text-dark;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: $color-text-muted;
		margin-bottom: $padding-y;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
