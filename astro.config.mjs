import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://flarepack.github.io',
	integrations: [
		starlight({
			title: 'Flarepack',
			social: {
				github: 'https://github.com/flarepack',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
        "./src/styles/custom.css",
      ],
			components: {
        // Override the default `SocialIcons` component.
        PageFrame: './src/components/HideHeader.astro',
      },
			pagefind: false,
		}),
	],
});
