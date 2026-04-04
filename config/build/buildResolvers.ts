import webpack from "webpack";
import { webpackConfigOptions } from "./types/config";

export const buildResolvers = (
  options: webpackConfigOptions,
): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
};