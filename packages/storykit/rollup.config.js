import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import easyImport from "postcss-easy-import"
import dts from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"

// eslint-disable-next-line
const packageJson = require("./package.json")

const createConfig = (input, outputKey, includePostCSS = true) => {
  const plugins = [peerDepsExternal()]

  if (includePostCSS) {
    plugins.push(
      postcss({
        sourceMap: true,
        minimize: true,
        plugins: [easyImport],
        config: {
          path: "./postcss.config.cjs",
        },
        extensions: [".css"],
        inject: {
          insertAt: "top",
        },
      })
    )
  }

  plugins.push(
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
    }),
    terser()
  )

  return {
    input,
    output: [
      {
        file: packageJson.exports[outputKey].default,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.exports[outputKey].module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["react/jsx-runtime"],
  }
}

const createTypesConfig = (input, output) => ({
  input,
  output: [{ file: output, format: "es" }],
  plugins: [
    dts.default({
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "@/*": ["src/*"],
        },
      },
    }),
  ],
  external: [/\.(css|less|scss)$/],
})

const config = [
  // Main bundle (includes everything)
  createConfig("src/index.ts", "."),
  createTypesConfig("src/index.ts", "dist/types.d.ts"),

  // Server-only bundle (excludes React components)
  createConfig("src/server.ts", "./server", false), // Don't include PostCSS for server bundle
  createTypesConfig("src/server.ts", "dist/server-types.d.ts"),
]

export default config
