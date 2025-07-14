import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5175,
        open: true,
        fs: {
            strict: false,
        },
        // Vite's dev server already falls back to index.html for unknown routes in SPA mode
    },
});
