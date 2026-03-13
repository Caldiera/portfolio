<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';

	const projects = [
		{
			title: 'Presentation Engine',
			description: '',
			link: '/projects/presentation-engine'
		},
		{
			title: 'Ectocloud',
			description: '',
			link: '/projects/ectocloud'
		},
		{
			title: 'Canadian Telecom',
			description: '',
			link: '/projects/canadian-telecom'
		},
		{
			title: 'On the Side',
			description: '',
			link: '/projects/on-the-side'
		},
		{
			title: 'Google',
			description: '',
			link: '/projects/google'
		}
	];
</script>

<svelte:head>
	<title>Projects — Brandon Marques</title>
</svelte:head>

<section>
	<h1>Projects</h1>
	<p class="subtitle">A collection of things I've built.</p>
	<div class="grid">
		{#each projects as project}
			<ProjectCard title={project.title} description={project.description} link={project.link} />
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
