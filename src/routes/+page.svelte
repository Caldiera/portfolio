<script lang="ts">
	import FrostedBackground from '$components/FrostedBackground.svelte';
	import ProjectCard from '$components/ProjectCard.svelte';
	import SlidingText from '$components/SlidingText.svelte';
	import colors from '$styles/_variables.module.scss';

	const featured = [
		{
			title: "Interesting projects I've worked on",
			link: './projects',
			description: "Collection of the most interesting projects that i'm the most proud of",
			buttonText: 'See Projects'
		},
		{
			title: '3D Projects ',
			description: 'I like to design stuff in my spare time. Here is where I can show it off',
			link: './3d',
			buttonText: 'See Some 3D '
		},
		{
			title: 'Markdown Blog',
			description:
				'A statically generated blog that renders markdown files with syntax highlighting.',
			link: '#',
			buttonText: 'View Project'
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
	<h2>Things I like to do:</h2>
	<div class="grid">
		{#each featured as project}
			<ProjectCard
				key={project.title}
				title={project.title}
				description={project.description}
				link={project.link}
				buttonText={project.buttonText}
			/>
		{/each}
	</div>
</section>

<style>
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
		color: var(--color-text-muted);
	}

	.cta {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.65rem 1.5rem;
		background: var(--color-primary);
		color: var(--color-white);
		border-radius: var(--radius-md);
		font-size: 1rem;
		text-decoration: none;
		align-self: flex-start;
		transition: background var(--transition-fast);

		&:hover {
			background: var(--color-primary-dark);
			text-decoration: none;
		}
	}

	.about {
		h2 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			color: var(--color-text-dark);
		}

		p {
			color: var(--color-text-mid);
			max-width: 65ch;
			line-height: 1.75;
		}

		& > :global(*) {
			margin-bottom: 2rem;
		}
	}

	.featured {
		padding: var(--padding-y) 0;
		border-top: 1px solid var(--color-border-light);
		margin: 5rem 0;

		h2 {
			font-size: 3rem;
			margin-bottom: 1.5rem;
			color: var(--color-text-dark);
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
