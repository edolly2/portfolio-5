import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config for React app deployed to GitHub Pages
export default defineConfig({
  base: "/portfolio-5/",
  plugins: [react()],
  build: {
    // Optimize images during build
    assetsInlineLimit: 8192, // Inline assets smaller than 8KB
    rollupOptions: {
      output: {
        // Better asset naming for caching
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
