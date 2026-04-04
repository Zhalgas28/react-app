import webpack from 'webpack';
import { webpackConfigOptions } from "./types/config";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths, isDev}: webpackConfigOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}