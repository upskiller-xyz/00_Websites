import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 8080,
        open: true,
        fs: {
            strict: false,
        },
        // Vite's dev server already falls back to index.html for unknown routes in SPA mode
    },
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, '../shared'),
        },
    },
    assetsInclude: ['**/*.woff', '**/*.woff2'],
});
