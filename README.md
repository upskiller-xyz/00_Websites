# 00_Websites

Code for our company and tools static web pages

# Run locally

npm install
npm run dev

# → http://localhost:5173/company.html

# → http://localhost:5173/tool.html

# Build

npm run build

# → dist/company.html + dist/tool.html + their JS/CSS

# Packages to setup React development environment

## Node.js

# Download and install nvm:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell

\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:

nvm install 24

# Verify the Node.js version:

node -v # Should print "v24.3.0".
nvm current # Should print "v24.3.0".

# Verify npm version:

npm -v # Should print "11.4.2".

## ESLint extension on VSCode

## Prettier

to enforce that files are formatted before a pull request is merged, use npx prettier --check for your continuous integration.
