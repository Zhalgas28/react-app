import type {Configuration as DevServerConfig} from "webpack-dev-server";
import { webpackConfigOptions } from "./types/config"

export const buildDevServer = (options: webpackConfigOptions): DevServerConfig => {
  return {
    open: true,
    port: options.port,
    historyApiFallback: true,
  }
}