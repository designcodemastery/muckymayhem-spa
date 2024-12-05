#!/bin/bash

# Variables
PROJECT_ROOT="muckymayhem-spa"

# Navigate to project root
#cd $PROJECT_ROOT || { echo "Project root does not exist."; exit 1; }

# Initialize npm project
npm init -y

# Install Bootstrap, Vite, and SASS
npm install bootstrap sass vite

# Create Vite config file
cat <<EOL > vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "./src/scss/styles.scss";\`,
      },
    },
  },
});
EOL

# Add Bootstrap import to styles.scss
echo "@import 'bootstrap';" > src/scss/styles.scss

echo "Bootstrap, Vite, and SASS installed and initialized successfully."
