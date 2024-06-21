import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;

export default defineConfig({
    build: {
        // our entry
        rollupOptions: {
          input: path.resolve(__dirname, 'src/main.js'),
        },

        // manifest
        manifest: true
      },

    // Adjust Vites dev server for DDEV
    // https://vitejs.dev/config/server-options.html
    server: {
        // respond to all network requests:
        host: '0.0.0.0',
        port: port,
        strictPort: true,
        // Defines the origin of the generated asset URLs during development
        origin: origin
    },

    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
