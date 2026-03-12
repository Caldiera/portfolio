<script lang="ts">
	interface Props {
		title: string;
		description: string;
		link: string;
	}

	let { title, description, link }: Props = $props();
</script>

<div class="card">
	<h3>{title}</h3>
	<p>{description}</p>
	<a href={link} target="_blank" rel="noopener noreferrer" class="btn">View Project</a>
</div>

<style>
	.card {
		border: 1px solid #e5e7eb;
		border-radius: 0.75rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: box-shadow 0.2s, transform 0.2s;
	}

	.card:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
	}

	h3 {
		font-size: 1.1rem;
		color: #111827;
	}

	p {
		font-size: 0.9rem;
		color: #6b7280;
		flex: 1;
	}

	.btn {
		display: inline-block;
		padding: 0.45rem 1rem;
		background: #3b82f6;
		color: #ffffff;
		border-radius: 0.4rem;
		font-size: 0.875rem;
		text-decoration: none;
		align-self: flex-start;
		transition: background 0.2s;
	}

	.btn:hover {
		background: #2563eb;
		text-decoration: none;
	}
</style>
