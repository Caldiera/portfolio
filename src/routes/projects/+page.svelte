<script lang="ts">
	import ClickableProjectCard from '$components/ClickableProjectCard.svelte';
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Projects — Brandon Marques</title>
</svelte:head>

<section>
	<h1>Projects</h1>
	<p class="subtitle">Projects I've been a part of during my career</p>
	<div class="grid">
		{#each projects as project (project.slug)}
			<ClickableProjectCard
				title={project.title}
				description={project.description}
				buttonIcon="arrow_forward"
				link={`/projects/${project.slug}`}
				buttonText="Read More"
				image={project.image}
			/>
		{/each}
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
		margin-bottom: var(--padding-y);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
