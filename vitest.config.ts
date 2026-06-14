import { getViteConfig } from "astro/config";

// Astro-documented Vitest setup: getViteConfig applies Astro's Vite pipeline so
// `import.meta.glob` and image imports resolve the same way they do at build.
export default getViteConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
});
