import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alanandzack.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()],
  // Ensure TypeScript is aware of Astro's environment
  typescript: {
    strict: true,
  },
});
