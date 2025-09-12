/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ipkit/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   project: true,
  // },
  // parserOptions: {
  //   project: "./tsconfig.json",
  //   tsconfigRootDir: __dirname,
  // },
}
