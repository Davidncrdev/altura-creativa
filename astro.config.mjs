import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Permitir importar estilos de Tailwind en componentes
      applyBaseStyles: false,
    }),
  ],
  // Configuración para optimización de imágenes
  image: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Configuración de build para producción
  build: {
    inlineStylesheets: 'never',
  },
  // Configuración de servidor de desarrollo
  server: {
    port: 3000,
    host: true,
  },
  // SEO y configuración del sitio
  site: 'https://alturacreativa.com',
  base: '/',
  trailingSlash: 'ignore',
  // Configuración de Vite para mejor rendimiento
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
    optimizeDeps: {
      include: ['framer-motion'],
    },
  },
});