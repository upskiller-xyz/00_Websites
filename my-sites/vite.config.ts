import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "public/index.html"),
        tool-01: resolve(__dirname, "public/tool-01.html"),
      },
    },
  },
});
