import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { webpackConfigOptions } from "./types/config";
import webpack from "webpack";

export const buildWebpackConfig = (
  options: webpackConfigOptions,
): webpack.Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
};
