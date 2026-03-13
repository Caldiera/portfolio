export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	externalLink?: string;
	body: string;
}

export const projects: Project[] = [
	{
		slug: 'presentation-engine',
		title: 'Presentation Engine',
		description:
			'lormen asdf asdf asdf asdf asdf asdf asd fasdf as dfasd fas df asdf asdf asdf asdf',
		tags: ['dev', 'reduceEachTrailingCommentRange', 'coding'],
		externalLink: 'https://blockzero.se',
		body: 'qqqqqqq qqqqqqqqq qqqqqqqqqqq qqqqqqqqqqq qqqqqqqqqq qqqqqqqqqqq qqqqqqqqqqqqqqq'
	},
	{
		slug: 'ectocloud',
		title: 'Ectocloud',
		description: '',
		tags: [],
		externalLink: '',
		body: ''
	},
	{
		slug: 'canadian-telecom',
		title: 'Canadian Telecom',
		description: '',
		tags: [],
		externalLink: '',
		body: ''
	},
	{
		slug: 'on-the-side',
		title: 'On the Side',
		description: '',
		tags: [],
		externalLink: '',
		body: ''
	},
	{
		slug: 'google',
		title: 'Google',
		description: '',
		tags: [],
		externalLink: '',
		body: ''
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
