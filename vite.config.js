import { resolve } from 'path'

export default {
  root: ".",
  build: {
    outDir: 'public', // Specify the output directory
    emptyOutDir: true, // Clear the output directory before building
    cssCodeSplit: false, // Combine all CSS into one file
  },
  server: {
    port: 8080
  }
}