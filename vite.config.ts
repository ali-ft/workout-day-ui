import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site — always use repo subpath in CI
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.CI === "true" ? "/workout-day-ui/" : "/");

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
