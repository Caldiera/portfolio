<script lang="ts">
	import FrostedBackground from '$components/FrostedBackground.svelte';
	import ProjectCard from '$components/ProjectCard.svelte';
	import SlidingText from '$components/SlidingText.svelte';
	import colors from '$styles/_variables.module.scss';

	const featured = [
		{
			title: 'Block Zero Presentation Engine',
			description:
				'I performed regular improvements and built entire apps based on the platform. Tying the physical and digital worlds together.',
			link: 'https://blockzero.se/presentation-engine/'
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
	<title>Brandon Marques Portfolio</title>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="big-name-wrapper">
		<SlidingText text="Hi, I'm" direction="right" exitTrigger={200} scrollDuration={1000} />
		<SlidingText text="Brandon" direction="left" exitTrigger={300} scrollDuration={1000} />
	</div>
</section>

<!-- About -->

<section class="about">
	<FrostedBackground background={colors.frostedVeryDarkGray}>
		<h2>About Me</h2>
		<p class="tagline">
			I'm a software developer with experience in fast-paced design environments. I build things
			across the stack, from machine learning systems in Python to frontend interfaces in React.
		</p>

		<p class="tagline">
			With a background in Mechanical Engineering, I'm especially interested in projects where
			software, design, and hardware come together.
		</p>
	</FrostedBackground>
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
		height: 80vh;
	}
	.big-name-wrapper {
		margin-bottom: 10rem;
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

		& > :global(*) {
			margin-bottom: 2rem;
		}
	}

	.featured {
		padding: $padding-y 0;
		border-top: 1px solid $color-border-light;
		margin: 5rem 0;

		h2 {
			font-size: 3rem;
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
