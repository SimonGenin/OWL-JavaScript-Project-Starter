import serve from "rollup-plugin-serve";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import terser from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import copy from "rollup-plugin-copy";
import replace from "rollup-plugin-replace";

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    input: "src/main.js",
    output: [
      {
        file: "dist/bundle.js",
        format: "esm",
      },
    ],
    plugins: [
      replace({
        "process.env.OWL_ENV": isProduction ? '"production"' : '"dev"',
      }),
      nodeResolve(),
      commonjs(),
      builtins(),
      globals(),
      copy({
        targets: [{ src: "public/index.html", dest: "dist" }],
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        extract: true,
        minimize: isProduction,
        // modules: true,
      }),
      !isProduction &&
        serve({
          open: false,
          verbose: true,
          contentBase: ["dist", "public"],
          host: "localhost",
          port: 10001,
        }),
      !isProduction && livereload(),
      isProduction && terser.terser(),
    ],
  },
];
