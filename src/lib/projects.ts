import type { MaterialSymbol } from '$lib/icons';
import presentationEngineImg from './projects/presentation-engine.jpg';
import ectocloudImg from './projects/ectocloud.png';
import canadianTelecomImg from './projects/canadian-telecom.png';
import onthesideImg from './projects/ontheside.png';
import googleImg from './projects/google.png';
import artefaktImg from './projects/artefakt.png';

export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	externalLink?: string;
	body: string;
	buttonText: string;
	buttonIcon?: MaterialSymbol;
	image?: string;
}

export const projects: Project[] = [
	{
		slug: 'presentation-engine',
		title: 'Presentation Engine',
		description:
			'An interactive storytelling platform using physical tokens and touch displays to explore complex systems and ideas.',
		tags: ['interactive', 'touch-interface', 'creative-tech', 'software'],
		externalLink: 'https://blockzero.se',
		image: presentationEngineImg,
		buttonText: 'Block zero case study',
		body: 'Presentation Engine™ is an interactive storytelling platform designed to make complex ideas tangible and explorable. Built around a large touchscreen display and physical tokens, the system allows users to directly interact with digital environments by placing and moving objects on the surface.\n\nCustom in-house software detects both the position and identity of each token in real time. This enables a wide range of interactive experiences to be built on top of the platform. For example, placing tokens representing buildings can reveal connections between infrastructure, while vehicle tokens can move through road networks and dynamically illustrate transport systems.\n\nThe platform was designed as a tool for immersive communication — enabling audiences to explore visions, products, or complex systems through tactile interaction rather than passive presentation. By combining physical interaction with digital storytelling, Presentation Engine™ turns presentations into collaborative, exploratory experiences.'
	},
	{
		slug: 'ectocloud',
		title: 'Ectocloud Exploration Tool',
		description:
			'An interactive 3D web demo explaining how E.ON’s ectocloud™ energy management platform optimizes heating and cooling across a city.',
		tags: ['web-development', '3d', 'ux-ui', 'interactive'],
		externalLink: '',
		image: ectocloudImg,
		buttonText: 'Block zero case study',
		body: 'Developed in collaboration with E.ON, this interactive demonstration tool explains how ectocloud™ operates as a digital platform managing ectogrid™ — an innovative energy system designed to balance heating and cooling demands across urban environments.\n\nThe project focused on translating complex energy infrastructure into an engaging and understandable experience for a wide range of audiences. We designed a narrative-driven exploration where users follow a city facing six different energy challenges, such as changing weather conditions and varying building thermal demands.\n\nEach chapter visualizes these challenges through animated 3D scenes that show how ectocloud™ dynamically optimizes energy flows across the network. For more technical audiences, a dedicated “How it Works” section reveals the underlying system logic and technology.\n\nTo make the experience flexible and easy to navigate, we built a custom UI overlay on top of the 3D environment, allowing users to jump between chapters and explore the system non-linearly.\n\nThe final tool enables E.ON’s team to communicate the value of ectocloud™ clearly and interactively during presentations, supported by a dedicated user manual and presentation script.'
	},
	{
		slug: 'canadian-telecom',
		title: 'Fleet Operations Platform',
		description:
			'A product design and development project focused on merging two telecom fleet-management systems into a unified platform.',
		tags: ['product-design', 'ux-ui', 'enterprise', 'web-development'],
		externalLink: 'https://blockzero.se/work/canadian-telecom/',
		image: canadianTelecomImg,
		buttonText: 'Block zero case study',
		body: 'This project focused on redesigning and consolidating two independent fleet management platforms used by a large Canadian telecom provider. Over time, both systems had evolved separately, creating complexity and inefficiencies for teams responsible for planning and coordinating field operations.\n\nThe goal was to merge these systems into a single, cohesive platform that streamlined fleet operations while improving usability for dispatchers, planners, and field teams.\n\nThrough product design, UX exploration, and software development, the project introduced a unified interface and clearer workflows for managing vehicles, scheduling operations, and coordinating large-scale field service activities.\n\nThe result was a modernized platform that simplified complex operational processes and enabled teams to manage fleet logistics more efficiently.'
	},
	{
		slug: 'on-the-side',
		title: 'Ontheside Platform',
		description:
			'A scalable sports content platform connecting athletes with fans through stories, training content, and sponsorship support.',
		tags: ['web-platform', 'nextjs', 'cloud', 'fullstack'],
		externalLink: 'https://kruso.se/ourwork/ontheside',
		image: onthesideImg,
		buttonText: 'Kruso case study',
		body: 'Ontheside is a digital platform designed to bring athletes closer to their fans by enabling them to share content about their journey, training, and lifestyle. The goal was to create a space where athletes could connect with supporters while also receiving financial backing through sponsorships and community engagement.\n\nThe platform was developed from scratch with no legacy systems, requiring the design of the entire technical architecture and product foundation. A scalable cloud infrastructure was implemented using AWS, with Kubernetes orchestration and a PostgreSQL database using type-safe Kysely queries. The frontend was built using a React-based Next.js stack combined with Tamagui’s universal design system to ensure high performance and a consistent experience across devices.\n\nThe result is a modern, scalable platform that allows athletes to share rich content such as training plans, nutrition advice, coaching insights, and personal stories, while fans can follow their progress and support them directly. The platform launched in 2025 and continues to evolve as new features and athlete communities are added.'
	},
	{
		slug: 'google',
		title: 'Future of Web Navigation',
		description:
			'A research and prototyping project exploring new concepts for how developers could build more fluid and context-aware navigation on the web.',
		tags: ['ux-research', 'ui-animation', 'frontend', 'prototyping'],
		externalLink: 'https://blockzero.se/work/google/',
		image: googleImg,
		buttonText: 'Block zero case study',
		body: 'This project was developed in collaboration with Google’s Chrome Web Platform team to explore what the future of web navigation could look like. Instead of focusing on a single browser feature, the goal was to investigate new tools and standards that developers could use to build more intuitive navigation experiences across websites and applications.\n\nThe work began with an exploratory research phase where we examined how people navigate information, time, tasks, and relationships. Drawing inspiration from real-world navigation systems such as maps, transportation networks, and autopilot systems, we developed conceptual models for how digital navigation could evolve.\n\nFrom this exploration, two core concepts were developed and prototyped. “Tab Knowledge” explored how browser tabs from the same origin could communicate and work together, enabling more seamless multi-page workflows. “Page Flow” proposed ways for websites to guide users naturally from one piece of content to the next, removing the abrupt endpoint that traditional pages create.\n\nThrough rapid front-end prototyping and minimal UI animations, the concepts were tested on real-world site examples to demonstrate how developers could implement these ideas in practice. The final prototypes helped communicate the concepts clearly and supported ongoing discussions around future web platform capabilities.'
	},
	{
		slug: 'artefakt',
		title: 'Artefakt',
		description:
			'A modular magnetic desk sculpture designed for focus and creative flow, developed from concept through engineering and manufacturing preparation.',
		tags: ['product-design', 'mechanical-design', 'manufacturing', 'hardware'],
		externalLink: 'https://artefakt.build/',
		image: artefaktImg,
		buttonText: 'Artefakt homepage',
		body: 'Artefakt is a modular magnetic desk sculpture designed to bring focus and creative flow into everyday workspaces. The object is built from precisely engineered components that snap together using embedded magnets, allowing the structure to be continuously rearranged into new forms.\n\nFor this project I was responsible for the engineering design and design-for-manufacture of the product. This included translating the initial concept into production-ready CAD models, developing the mechanical structure, and optimizing the design for manufacturing constraints and assembly.\n\nI also led the manufacturing outreach process, identifying and contacting potential suppliers and production partners to evaluate feasibility, materials, and fabrication methods. This work ensured that the design could transition from prototype to scalable production.\n\nThe project was launched publicly through a Kickstarter campaign as a modular kinetic object intended to encourage creativity, focus, and tactile interaction at the desk.'
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
