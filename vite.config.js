import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: no path aliases!
  resolve: {
    alias: {}
  },

  server: {
    port: 3000,
  },

  build: {
    outDir: "dist",
  },
});
