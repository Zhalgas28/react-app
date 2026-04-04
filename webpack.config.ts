import webpack from "webpack"
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {webpackConfigEnv, webpackConfigMode, webpackConfigPaths} from "./config/build/types/config";
import path from "path";

export default (env: webpackConfigEnv) => {
  const configPaths: webpackConfigPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const port: number = env.port || 3000
  const mode: webpackConfigMode = env.mode || "development"

  const isDev: boolean = mode === "development"

  return buildWebpackConfig({
    mode: mode,
    paths: configPaths,
    port: port,
    isDev,
  })
}