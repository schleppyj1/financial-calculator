# Assignment for Financial Calculator CLI

**Note for Students:**

You are responsible for implementing the functionality in `financialCalculator.js` as well as providing `src/arrays-03.js` (for the addUpArrayElements() function).

All tests in `tests/financialCalculator.test.js` must pass.

Before anything else: **replace** the following:

*   **In `package.json`:**
    *   `@yourname` with your actual NPM account name in the package name (retain the `@` as required by NPM's scope policy).
    *   `Your Name` with your real name in the author field.
    *   `yourusername` with your GitHub username.
*   **In `README.md`:**
    *   `@yourname` with your actual NPM account name in the package name (retain the `@` as required by NPM's scope policy).
*   **In `LICENSE`:**
    *   `Your Name` with your real name.

## Overview of the Steps Involved

1.  After replacing the necessary fields in `package.json` (and README.md), run:

    npm install

2.  Complete the code for the source modules in `'./src/arrays-03'`.
3.  Review the requirements in the `REQUIREMENTS.md` file to understand what is needed in `financialCalculator.js` to pass all tests.
4.  Implement the missing JavaScript code in `financialCalculator.js` using functions from the source modules. Use array methods, like filter, if needed.
5.  Test your implementation by running:

    npm test

6.  Lint your code with:

    npm run lint

7.  Publish your package for public access using:

    npm publish --access public

8.  Finally, commit your changes and push them to your repository.

## Files in This Project

*   `financialCalculator.js` – The main CLI script that parses arguments, processes transaction amounts, and outputs financial metrics.
*   The `src/` directory – Contains source modules:
    *   `'src/arrays-03'` – Should export the needed functions
*   `LICENSE` – The MIT License for the project.
*   `README.md`
*   `package.json` – The NPM package configuration file.

## Testing

To run the tests, execute:

npm test

Ensure all tests pass after you complete your implementation.

## Linting

ESLint is set up to help you maintain code quality. Run the linter with:

npm run lint

## Publishing to NPM

The `package.json` is configured to include only the necessary files:

*   `financialCalculator.js`
*   The `src/` directory
*   `LICENSE`
*   `README.md`

After updating `package.json`, `README.md`, and `LICENSE` (i.e., replacing `@yourname`, `yourusername`, or `Your Name`), log in to NPM:

npm login

Then publish your package with public access by running:

npm publish --access public

## NPM Scope

NPM Scopes provide a way to prevent package name conflicts by grouping packages under a unique namespace. When you publish a package with a scope—using the format `@yourname/package-name`—you ensure that your package's name is unique within your personal or organizational namespace. This approach protects against accidentally using a package name that has already been claimed in the public registry and maintains clear ownership within the NPM ecosystem.

Note that scoped packages are private by default. To make your scoped package publicly accessible, you must include the `--access public` flag when you run `npm publish`.
