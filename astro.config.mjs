// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://fieldbw.com',
  output: 'static',
  trailingSlash: 'ignore',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  build: {
    format: 'directory',
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Keep images in their organized folders
            if (/\.(jpe?g|png|gif|webp|avif|svg)$/i.test(assetInfo.name)) {
              return 'images/[name]-[hash][extname]';
            }
            return '_astro/[name]-[hash][extname]';
          }
        }
      }
    }
  }
});