# React + TypeScript + Vite (Template)

This template provides a minimal setup to get working with React and Typescript using Vite as a build tool with below additional setup

- Added below dependencies by default

  - "@trioptima/trids"
  - "@trioptima/trids-react"
  - "react"
  - "react-dom"
  - "react-router-dom"

- Unit Testing support (Vitest with React Testing Library)
- ESLint
- Prettier
- StoryBook (optional)
- pre-commit hooks
- Editor configuration added for consistent coding styles between different editors and IDEs
- Few extensions required which will prompt for extensions to install in the vs code editor.

## Clone the repo

Clone the repo on your system and run the below commands to run the application and optionally run the additional commands provided to lint and test the code.

## Commands to run

- npm install (install dependencies)
- npm run dev (starts the dev server)
- npm run build (starts the build sever)
- npm run lint:fix (fix any linting issues)
- npm run test (run unit tests)
- npm run test:coverage (run test and generate coverage report)
- npm run format (format the code based on prettier rules)

## How to add origin

- git remote add origin #origin-path#
- git remote add upstream #upstream-path# (If you have any upstream branch)

## git commands mostly used

- git checkout #branch-name# (command will help to switch to the current branch)
- git checkout -b #new-branch# (command will help to create new branch inside any parent branch)
- git add #file-name# (add specific file to the staging)
- git commit -m #message# (commit the files with message)
- git push origin #branch-name# (push the code to the origin branch)

## VSCode workspace settings

```
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript, typescript, javascriptreact, typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
