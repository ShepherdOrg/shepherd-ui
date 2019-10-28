#!/bin/bash -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
find_changes() {
    if [[ "$BRANCH" == "master" ]]; then
        COMMIT=$(git rev-parse HEAD~1)
    else
        COMMIT=$(git merge-base origin/master HEAD)
    fi

    files=$(git diff --name-only --diff-filter=d "$COMMIT" src)
    for file in $files; do
      echo $file
    done
}

# MAIN
find_changes
