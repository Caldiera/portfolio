<script lang="ts">
	import StlViewer from '$components/StlViewer.svelte';
	import FrostedButton from '$components/FrostedButton.svelte';
	import desk from '$lib/stl/desk.stl?url';
	import drawer from '$lib/stl/drawer.stl?url';
	import coffee1 from '$lib/stl/coffee1.stl?url';
	import coffee2 from '$lib/stl/coffee2.stl?url';
	import coffee3 from '$lib/stl/coffee3.stl?url';
	import colors from '$styles/_variables.module.scss';
</script>

<svelte:head>
	<title>3D Projects — Brandon Marques</title>
</svelte:head>

<section>
	<div class="back">
		<FrostedButton href="/" background={colors.frostedMedium} padding="xs">
			<span class="btn-content">
				<span class="material-symbols-rounded" aria-hidden="true">arrow_back</span>
				Back to Home
			</span>
		</FrostedButton>
	</div>
	<h1>3D Projects</h1>
	<p class="subtitle">Things I've designed in my spare time.</p>
	<div class="grid">
		<StlViewer
			src={drawer}
			colspan={2}
			rowspan={2}
			description="[ Laser cut steel bedside table ]"
			rotation={{ x: -60, y: 0, z: -30 }}
		/>
		<StlViewer
			src={coffee3}
			colspan={4}
			rowspan={2}
			rotation={{ x: 0, y: 0, z: 0 }}
			description="[ Single Sheet Steel Table ]"
		/>
		<StlViewer
			src={desk}
			colspan={4}
			rowspan={3}
			description="[ Writing desk ]"
			rotation={{ x: 25, y: -30, z: 0 }}
		/>

		<StlViewer
			src={coffee1}
			colspan={2}
			rowspan={2}
			description="[ Coffee table trolley ]"
			rotation={{ x: 15, y: -30, z: 0 }}
		/>
		<StlViewer
			src={coffee2}
			colspan={2}
			rowspan={2}
			rotation={{ x: 15, y: -30, z: 0 }}
			description="[ Coffee table ]"
		/>
	</div>
</section>

<style>
	.back {
		width: fit-content;
		position: relative;
		top: -1.5rem;
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

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: var(--color-text-dark);
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: var(--color-text-muted);
		margin-bottom: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;

		@media (max-width: 900px) {
			grid-template-columns: repeat(2, 1fr);

			> :global(*) {
				grid-column: span 1 !important;
				grid-row: span 1 !important;
				aspect-ratio: 1 / 1 !important;
			}
		}

		@media (max-width: 620px) {
			grid-template-columns: 1fr;
		}
	}
</style>
