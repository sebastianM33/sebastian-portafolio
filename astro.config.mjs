// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },

  vite: {
    // @ts-ignore --- Esto ignorará el error visual en VS Code
    plugins: [tailwindcss()], 
    ssr: {
      noExternal: []
    }
  }
});