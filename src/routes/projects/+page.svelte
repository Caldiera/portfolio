<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';

	const projects = [
		{
			title: 'Weather Dashboard',
			description: 'A real-time weather app built with SvelteKit and the OpenWeather API.',
			link: '#'
		},
		{
			title: 'Task Manager',
			description: 'A full-stack task management tool with auth, drag-and-drop, and team support.',
			link: '#'
		},
		{
			title: 'Markdown Blog',
			description:
				'A statically generated blog that renders markdown files with syntax highlighting.',
			link: '#'
		},
		{
			title: 'CLI Budget Tracker',
			description: 'A command-line tool for tracking personal finances written in Go.',
			link: '#'
		},
		{
			title: 'URL Shortener',
			description: 'A self-hosted URL shortener with analytics built on Redis and Node.js.',
			link: '#'
		},
		{
			title: 'Dev Portfolio',
			description: 'This portfolio site, built with SvelteKit and TypeScript.',
			link: '#'
		}
	];
</script>

<svelte:head>
	<title>Projects — Alex Carter</title>
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
