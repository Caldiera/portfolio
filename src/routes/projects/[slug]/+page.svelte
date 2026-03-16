<script lang="ts">
	import FrostedBackground from '$components/FrostedBackground.svelte';
	import FrostedButton from '$components/FrostedButton.svelte';
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
	<div class="back">
		<FrostedButton href="/projects" background={colors.frostedMedium} padding="xs">
			<span class="btn-content">
				<span class="material-symbols-rounded" aria-hidden="true">arrow_back</span>
				Back to Projects
			</span>
		</FrostedButton>
	</div>
	<h1>{project.title}</h1>

	{#if project.tags.length > 0}
		<div class="tags-wrapper">
			<FrostedBackground background={colors.frostedMedium} padding="sm">
				<ul class="tags">
					{#each project.tags as tag (tag)}
						<FrostedBackground background={colors.frostedMedium} padding="xs">
							<li>{tag}</li>
						</FrostedBackground>
					{/each}
				</ul>
			</FrostedBackground>
		</div>
	{/if}
	<FrostedBackground background={colors.frostedMedium} padding="md">
		{#if project.description}
			<p class="description">{project.description}</p>
		{/if}

		{#if project.image}
			<img src={project.image} alt={project.title} class="project-image" />
		{/if}

		{#if project.body}
			<div class="body">{project.body}</div>
		{/if}
		{#if project.externalLink}
			<FrostedButton
				href={project.externalLink}
				background={colors.frostedMedium}
				padding="sm"
				target="_blank"
			>
				<span class="btn-content">
					{project.buttonText}
					<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>
				</span>
			</FrostedButton>
		{/if}
	</FrostedBackground>
</section>

<style>
	.back {
		width: fit-content;
		position: relative;
		top: -1.5rem;
	}

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: var(--color-white);
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
			color: var(--color-white);
			padding: 0.25rem 0.75rem;
			border-radius: var(--radius-sm);
			font-size: 0.8rem;
		}
	}

	.description {
		color: var(--color-text);
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.project-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		object-position: center center;
		border-radius: var(--radius-lg);
		margin-bottom: 1.5rem;
	}

	.body {
		color: var(--color-text);
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.btn-content {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;

		.material-symbols-rounded {
			font-size: 1rem;
			line-height: 1;
		}
	}
</style>
