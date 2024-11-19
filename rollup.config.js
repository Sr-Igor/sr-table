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
    external: ["react", "react-dom", "styled-components"],
    plugins: [
      resolve(),
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
        file: "dist/next/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/next/index.es.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom", "styled-components", "next/navigation"],
    plugins: [
      ignore(["next/navigation"]),
      resolve(),
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
      file: "dist/next/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
