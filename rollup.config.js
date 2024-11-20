import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import ignore from "rollup-plugin-ignore";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: [
      "react",
      "react-dom",
      "styled-components",
      /^@mui\//, // Externaliza todos os pacotes MUI
      "react/jsx-runtime",
    ],
    plugins: [
      resolve({
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"], // Garante resolução correta
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
      terser(),
    ],
  },
  {
    input: "src/next/index.ts",
    output: [
      {
        file: "next/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "next/index.es.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: [
      "react",
      "react-dom",
      "styled-components",
      "next/navigation",
      /^@mui\//,
      "react/jsx-runtime",
    ],
    plugins: [
      ignore(["next/navigation"]),
      resolve({
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
  {
    input: "src/next/index.ts",
    output: {
      file: "next/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
