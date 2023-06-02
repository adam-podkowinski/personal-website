import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "https://adam-podkowinski.github.io/",
  plugins: [sveltekit()]
});
