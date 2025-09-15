// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ipkit/eslint-config/library.js"],
  ignorePattern: ["apps/**", "packages/**"],
};
