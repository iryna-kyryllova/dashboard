import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./plugins";
import { buildLoaders } from "./loaders";
import { buildResolvers } from "./resolvers";
import { buildDevServer } from "./devServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
const { paths, mode, isDevelopment } = options;

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
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDevelopment ? 'inline-source-map' : undefined,
    devServer: isDevelopment ? buildDevServer(options): undefined,
  }
}