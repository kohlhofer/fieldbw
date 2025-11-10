// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fieldbw.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});