import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config for React app deployed to GitHub Pages
export default defineConfig({
  base: "/portfolio-5/",
  plugins: [react()],
});
