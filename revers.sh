#!/bin/bash

# Revert the last commit
git revert --no-edit HEAD

# Push the reverted commit
git push

echo "Last commit reverted and pushed to GitHub!"