#!/bin/bash

# GitHub username and repository name
GITHUB_USERNAME="designcodemastery"
REPO_NAME="muckymayhem-spa"

# Create the repo using GitHub CLI (make sure gh is installed and authenticated)
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed. Install it from https://cli.github.com/."
    exit 1
fi

gh repo create $REPO_NAME --public --confirm

echo "GitHub repository $REPO_NAME created successfully."
