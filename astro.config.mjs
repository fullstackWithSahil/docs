// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	// redirects: {
   	// 	'/': 'api/overview'
  	// },
	// site:"https://docs.buisnesstools.com",
	integrations: [
		starlight({
			title: 'Buisnesstools Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
				{
					label: 'API docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'api/overview' },
						{ label: 'Create keys', slug: 'api/create' },
						{ label: 'Email api', slug: 'api/email' },
						{ label: 'Leads api', slug: 'api/leads' },
					],
				},
			],
		}),
	],
});
