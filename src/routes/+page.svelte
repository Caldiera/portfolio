<script lang="ts">
	import ProjectCard from '../components/ProjectCard.svelte';

	const featured = [
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
			description: 'A statically generated blog that renders markdown files with syntax highlighting.',
			link: '#'
		}
	];
</script>

<svelte:head>
	<title>Alex Carter — Portfolio</title>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<h1>Hi, I'm Alex Carter</h1>
	<p class="tagline">I build software and experiments.</p>
	<a href="/projects" class="cta">View Projects</a>
</section>

<!-- About -->
<section class="about">
	<h2>About Me</h2>
	<p>
		I'm a full-stack developer with a passion for building clean, performant web applications.
		I work primarily with TypeScript, SvelteKit, and Node.js, and I enjoy exploring everything
		from developer tooling to data visualization. I focus on writing maintainable code and
		shipping things that actually work.
	</p>
</section>

<!-- Featured Projects -->
<section class="featured">
	<h2>Featured Projects</h2>
	<div class="grid">
		{#each featured as project}
			<ProjectCard title={project.title} description={project.description} link={project.link} />
		{/each}
	</div>
</section>

<style>
	.hero {
		padding: 4rem 0 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		color: #111827;
	}

	.tagline {
		font-size: 1.2rem;
		color: #6b7280;
	}

	.cta {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.65rem 1.5rem;
		background: #3b82f6;
		color: #ffffff;
		border-radius: 0.5rem;
		font-size: 1rem;
		text-decoration: none;
		align-self: flex-start;
		transition: background 0.2s;
	}

	.cta:hover {
		background: #2563eb;
		text-decoration: none;
	}

	.about {
		padding: 2rem 0;
		border-top: 1px solid #f3f4f6;
	}

	.about h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #111827;
	}

	.about p {
		color: #4b5563;
		max-width: 65ch;
		line-height: 1.75;
	}

	.featured {
		padding: 2rem 0;
		border-top: 1px solid #f3f4f6;
	}

	.featured h2 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		color: #111827;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
