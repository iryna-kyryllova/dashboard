import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./plugins";
import { buildLoaders } from "./loaders";
import { buildResolvers } from "./resolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
const { mode, paths, isDevelopment } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}