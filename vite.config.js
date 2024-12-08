const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  scripts: {
    dev: "vite",
    build: {
      outDir: 'public', // Specify the output directory
      emptyOutDir: true, // Clear the output directory before building
      cssCodeSplit: false, // Combine all CSS into one file
    },
    test: "echo \"Error: no test specified\" && exit 1"
  }
}