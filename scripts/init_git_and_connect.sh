#!/bin/bash

# Variables
PROJECT_ROOT="muckymayhem-spa"
GITHUB_USERNAME="designcodemastery"
REPO_NAME="muckymayhem-spa"

# Navigate to the project root
#cd $PROJECT_ROOT || { echo "Project root does not exist."; exit 1; }

# Initialize Git
#git init
#echo "Git initialized in $PROJECT_ROOT."

# Add all files and make initial commit
git add .
git commit -m "Initial commit"

# Add remote origin and push
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
git branch -M main
git push -u origin main

echo "Git repository connected to GitHub and pushed."
