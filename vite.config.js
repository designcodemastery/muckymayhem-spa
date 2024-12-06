import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    open: true,
  },
  build: {
    outDir: 'public', 
    emptyOutDir: true, 
    cssCodeSplit: false,
  }
});