import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import postcss from "rollup-plugin-postcss"; // css, scss

// Пакеты для оптимизации
import { terser } from "rollup-plugin-terser"; // минифицирует наш пакет и уменьшит общий размер файла
import peerDepsExternal from "rollup-plugin-peer-deps-external"; // С помощью плагина peer dependencies от rollup мы можем сообщить проектам, использующим наши библиотеки, какие зависимости необходимы (например, React), но не упаковывать копию React с самой библиотекой. Если потребитель уже имеет React в своем проекте, он будет использовать его, в противном случае он будет установлен при запуске npm install.

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.s?css$/],
  },
];
