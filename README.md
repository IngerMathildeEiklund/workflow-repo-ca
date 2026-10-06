# Workflow Holidaze

This is a website to find and book holiday venues.

### Prerequesites

- Node.js to run npm
- Git
- VSCode, or equivalent

### Setup

1. Clone the repository

```bash
git clone https://github.com/IngerMathildeEiklund/workflow-repo-ca
cd workflow-repo-ca
```

### Install dependencies

```bash
  npm install
```

### Install Playwright

```bash
npx playwright install
```

### Create an .env file

```bash
cd .env.example .env
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`TEST_USER_EMAI`

`TEST_USER_PASSWORD`

### Build tailwind CSS and view changes

```bash
  npm run dev
```

### Start the server

```bash
npm start
```

### Run tests

```bash
npm test
```

To run unit tests with Vitest

```bash
npx playwright test
```

To run e2e tests on the whole application with Playwright.

## Code quality

Eslint and prettier enforce code formatting.
Husky runs a Git hook before each commit.
Lint-staged runs prettier and Eslint on staged files only, if there are any errors, the commit is blocked.
