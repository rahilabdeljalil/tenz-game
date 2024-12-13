#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Error: Commit message is required."
  exit 1
fi

# Add all changes to staging
git add .
if [ $? -ne 0 ]; then
  echo "Error: Failed to add files."
  exit 1
fi

# Commit changes
git commit -m "$1"
if [ $? -ne 0 ]; then
  echo "Error: Commit failed."
  exit 1
fi

# Push changes
git push origin main
if [ $? -ne 0 ]; then
  echo "Error: Push failed."
  exit 1
fi

echo "Changes pushed to GitHub successfully!"