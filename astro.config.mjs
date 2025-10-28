import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://<your-username>.github.io',
  base: '/',
  output: 'static'
});
