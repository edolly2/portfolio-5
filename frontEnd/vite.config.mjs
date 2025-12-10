import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config (ESM) to avoid CJS deprecation warnings
export default defineConfig({
  plugins: [react()],
});
