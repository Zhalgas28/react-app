export type webpackConfigMode = 'development' | 'production';

export interface webpackConfigPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
}

export interface webpackConfigEnv {
  port: number,
  mode: webpackConfigMode
}

export interface webpackConfigOptions {
  mode: webpackConfigMode,
  paths: webpackConfigPaths,
  port: number,
  isDev: boolean,
}