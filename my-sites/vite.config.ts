import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        company: new URL("./public/company.html", import.meta.url).pathname,
        tool: new URL("./public/tool.html", import.meta.url).pathname,
      },
    },
  },
});
