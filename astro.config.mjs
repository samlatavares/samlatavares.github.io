// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// SITE_URL e BASE_PATH são preenchidos pelo workflow do GitHub Pages,
// então o mesmo código serve para usuario.github.io e usuario.github.io/repo.
export default defineConfig({
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    site: process.env.SITE_URL || "http://localhost:4321",
    base: process.env.BASE_PATH || "/",
});
