/*
 ***************************************************
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2021
 *
 ***************************************************
 */
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json";

const env = process.env.NODE_ENV;
const extensions = [".js", ".ts"];

const onwarn = (warning, warn) => {
  if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
    return;
  }
  warn(warning);
};

const config = {
  onwarn,
  input: "index.ts",
  external: Object.keys(pkg.peerDependencies || {}).concat("@babel/runtime"),
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: env === "production" ? true : "inline",
      interop: "auto",
    },
    {
      dir: "dist/es",
      format: "es",
      sourcemap: env === "production" ? true : "inline",
      interop: "auto",
    },
  ],
  plugins: [
    nodeResolve({ extensions, browser: true, preferBuiltins: false }),
    babel({
      extensions,
      include: ["**/*"],
      babelHelpers: "runtime",
      exclude: "**/node_modules/**",
    }),
    json({ compact: true }),
    commonjs(),
    typescript({
      sourceRoot: "/typescript-axios-ts",
      outputToFilesystem: true,
    }),
  ],
};

if (env === "production") {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  );
}

export default config;
