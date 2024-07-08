import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
import { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    cssLoader,
    tsLoader,
  ];
}