import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/kw-web2",
  plugins: [sveltekit()],
});
