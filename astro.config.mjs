// astro.config.mjs
import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

export default defineConfig({
  integrations: [
    icons()
  ]
});
