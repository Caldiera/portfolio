import { error } from '@sveltejs/kit';
import { getProject } from '$lib/projects';

export function load({ params }: { params: { slug: string } }) {
	const project = getProject(params.slug);
	if (!project) throw error(404);
	return { project };
}
