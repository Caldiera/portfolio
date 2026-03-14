<script lang="ts">
	import FrostedBackground from '$components/FrostedBackground.svelte';
	import type { Project } from '$lib/projects';
	import colors from '$styles/_variables.module.scss';

	interface Props {
		data: { project: Project };
	}

	let { data }: Props = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Brandon Marques</title>
</svelte:head>

<section>
	<h1>{project.title}</h1>

	{#if project.tags.length > 0}
		<div class="tags-wrapper">
			<FrostedBackground background={colors.frostedMedium} padding="sm">
				<ul class="tags">
					{#each project.tags as tag}
						<FrostedBackground background={colors.frostedMedium} padding="xs">
							<li>{tag}</li>
						</FrostedBackground>
					{/each}
				</ul>
			</FrostedBackground>
		</div>
	{/if}
	<FrostedBackground background={colors.tertiaryDark} padding="md">
		{#if project.description}
			<p class="description">{project.description}</p>
		{/if}

		{#if project.body}
			<div class="body">{project.body}</div>
		{/if}
	</FrostedBackground>

	{#if project.externalLink}
		<a href={project.externalLink} class="btn" target="_blank" rel="noopener noreferrer">
			View Project
		</a>
	{/if}
</section>

<style lang="scss">
	@use '../../../styles/variables' as *;

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: $color-primary;
		margin-bottom: 1rem;
	}

	.tags-wrapper {
		width: fit-content;
		margin-bottom: 1.5rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			background: $color-primary;
			color: $color-white;
			padding: 0.25rem 0.75rem;
			border-radius: $radius-sm;
			font-size: 0.8rem;
		}
	}

	.description {
		color: $color-text-muted;
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.body {
		color: $color-text-dark;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.btn {
		display: inline-block;
		padding: 0.6rem 1.25rem;
		background: $color-primary;
		color: $color-white;
		border-radius: $radius-sm;
		text-decoration: none;
		transition: background $transition-fast;

		&:hover {
			background: $color-primary-dark;
		}
	}
</style>
