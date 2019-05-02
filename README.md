Boilerplate setup for eslint, jest, webpack, babel.

Works with VSCode eslint/jest extensions.

eslint config in package.json
.babelrc
webpack.config.js (compiles from src/ to dist/)

Setup a git hook for eslint to be run before allowing commits:
copy pre-commit to .git/hooks/pre-commit
(Note: this runs only on staged files. remember git add --all!)

