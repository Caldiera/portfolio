<script lang="ts">
	import FrostedBackground from '../components/FrostedBackground.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import SlidingText from '../components/SlidingText.svelte';

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
			description:
				'A statically generated blog that renders markdown files with syntax highlighting.',
			link: '#'
		}
	];
</script>

<svelte:head>
	<title>Alex Carter — Portfolio</title>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<SlidingText text="Brandon" direction="left" startScroll={100} scrollDuration={600} />
	<SlidingText text="Marques" direction="right" startScroll={100} scrollDuration={600} />
	<FrostedBackground>
		<p class="tagline">
			Software developer with experience in fast-paced design environments. I build things across
			the stack — from machine learning systems in Python to frontend interfaces in React. With a
			background in Mechanical Engineering, I'm especially interested in projects where software,
			design, and hardware come together.
		</p>
	</FrostedBackground>
	<a href="/projects" class="cta">View Projects</a>
</section>

<!-- About -->
<section class="about">
	<h2>About Me</h2>
	<p>
		I'm a full-stack developer with a passion for building clean, performant web applications. I
		work primarily with TypeScript, SvelteKit, and Node.js, and I enjoy exploring everything from
		developer tooling to data visualization. I focus on writing maintainable code and shipping
		things that actually work.
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

<style lang="scss">
	@use '../styles/variables' as *;

	.hero {
		padding: 4rem 0 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100vh;
	}

	.tagline {
		font-size: 1.2rem;
		color: $color-text-muted;
	}

	.cta {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.65rem 1.5rem;
		background: $color-primary;
		color: $color-white;
		border-radius: $radius-md;
		font-size: 1rem;
		text-decoration: none;
		align-self: flex-start;
		transition: background $transition-fast;

		&:hover {
			background: $color-primary-dark;
			text-decoration: none;
		}
	}

	.about {
		padding: $padding-y 0;
		border-top: 1px solid $color-border-light;

		h2 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			color: $color-text-dark;
		}

		p {
			color: $color-text-mid;
			max-width: 65ch;
			line-height: 1.75;
		}
	}

	.featured {
		padding: $padding-y 0;
		border-top: 1px solid $color-border-light;

		h2 {
			font-size: 1.5rem;
			margin-bottom: 1.5rem;
			color: $color-text-dark;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
