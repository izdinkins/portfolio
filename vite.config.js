import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
/** @type {import('tailwindcss').Config} */


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        'holo-bg': {
          '0%': { 'background-position': '0 var(--background-y), 0 0' },
          '100%': { 'background-position': '0 var(--background-y), 100% 100%' },
        },
      },
      animation: {
        'holo-bg': 'holo-bg 18s linear infinite',
      },
      backgroundSize: {
        '500%': '500% 500%',
        '300%': '300% 300%',
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // <-- this allows "@/..." imports
    }
  },
  assetsInclude: ['**/*.glb']
});

