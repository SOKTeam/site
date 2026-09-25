// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    // Public URL of the site: used for canonical links, Open Graph URLs and the sitemap
    site: 'https://sokfromsokteam.vercel.app',
    // Match the internal links (/docs, not /docs/) so canonical URLs and the sitemap agree
    trailingSlash: 'never',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
