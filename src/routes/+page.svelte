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
			title: '3D Projects',
			description: 'I like to design stuff in my spare time. Here is where I can show it off',
			link: './3d',
			buttonText: 'See Some 3D'
		}
	];
</script>

<svelte:head>
	<title>Brandon Marques Portfolio</title>
</svelte:head>

<section class="hero">
	<SlidingText text="Hi, I'm" direction="right" exitTrigger={200} scrollDuration={1000} />
	<SlidingText text="Brandon" direction="left" exitTrigger={300} scrollDuration={1000} />
</section>

<section class="about">
	<FrostedBackground background={colors.frostedVeryDarkGray}>
		<h2>About Me</h2>
		<p>
			I'm a software developer with experience in fast-paced design environments. I build things
			across the stack, from machine learning systems in Python to frontend interfaces in React.
		</p>
		<p>
			With a background in Mechanical Engineering, I'm especially interested in projects where
			software, design, and hardware come together.
		</p>
	</FrostedBackground>
</section>

<section class="featured">
	<h2>Things I like to do:</h2>
	<div class="card-grid">
		{#each featured as item (item.title)}
			<ProjectCard
				title={item.title}
				description={item.description}
				link={item.link}
				buttonText={item.buttonText}
			/>
		{/each}
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 4rem 0 3rem;
		height: 80vh;
	}

	.about {
		h2 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		p {
			max-width: 65ch;
			line-height: 1.75;
			font-size: 1.2rem;

			& + p {
				margin-top: 1rem;
			}
		}
	}

	.featured {
		padding: var(--padding-y) 0;
		border-top: 1px solid var(--color-border-light);
		margin: 5rem 0;

		h2 {
			font-size: 3rem;
			margin-bottom: 1.5rem;
			color: var(--color-text-muted);
		}
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}
</style>
