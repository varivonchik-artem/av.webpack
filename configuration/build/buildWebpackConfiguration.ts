import path from "path";
import { BuildOptions } from "../types/configurationTypes";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevelopmentServer } from "./buildDevelopmentServer";

export function buildWebpackConfiguration(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
    devServer: buildDevelopmentServer(options),
  };
}
