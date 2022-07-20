import typescript from "rollup-plugin-typescript2";
import solidPlugin from "vite-plugin-solid";

export default {
  input: "./src/App.tsx",
  output: {
    file: "bundle.js",
    format: "es",
  },
  plugins: [typescript(), solidPlugin()],
};
