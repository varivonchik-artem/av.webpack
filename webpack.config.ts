import webpack from "webpack";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";
import { BuildPaths } from "./configuration/types/configurationTypes";
import path from "path";

const PATHS: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const MODE = "development";
const IS_DEVELOPMENT = MODE === "development";

const webpackConfiguration: webpack.Configuration = buildWebpackConfiguration({
  mode: MODE,
  paths: PATHS,
  isDevelopment: IS_DEVELOPMENT,
});

export default webpackConfiguration;
