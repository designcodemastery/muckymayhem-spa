#!/bin/bash

# Define the project root and directories
PROJECT_ROOT="muckymayhem-spa"

# Create project root
mkdir $PROJECT_ROOT

# Create project structure
mkdir -p $PROJECT_ROOT/{src/{scss,js},images,sections,public}
touch $PROJECT_ROOT/index.html $PROJECT_ROOT/README.md $PROJECT_ROOT/.gitignore

# Create SCSS files
touch $PROJECT_ROOT/src/scss/{styles.scss,app.scss,navbar.scss,hero.scss,about-us.scss,where-to-next.scss,sponsors.scss,ride-diary.scss,photos.scss,faq.scss,contact-us.scss,disclaimer.scss,footer.scss}

# Create JS files
touch $PROJECT_ROOT/src/js/{app.js,navbar.js,hero.js,about-us.js,where-to-next.js,sponsors.js,ride-diary.js,photos.js,faq.js,contact-us.js,disclaimer.js,footer.js}

# Create section HTML files
touch $PROJECT_ROOT/sections/{hero.html,about-us.html,where-to-next.html,sponsors.html,ride-diary.html,photos.html,faq.html,contact-us.html,disclaimer.html,footer.html}

echo "Project structure created successfully."
