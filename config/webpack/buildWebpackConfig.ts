import { Configuration } from 'webpack'
import { BuildOptions } from './types'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDevelopment } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(options),
    devtool: isDevelopment ? 'inline-source-map' : undefined,
    devServer: isDevelopment ? buildDevServer(options) : undefined
  }
}
