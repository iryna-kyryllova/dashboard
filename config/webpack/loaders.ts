import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
import { BuildOptions } from './types';

export function buildLoaders({ isDevelopment }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
    type: "asset/resource",
  }

  const svgInlineLoader = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  }

  const svgComponentLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: isDevelopment ? "[name]__[local]" : "[hash:base64:8]"
          }
        },
      },
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    fileLoader,
    svgInlineLoader,
    svgComponentLoader,
    cssLoader,
    tsLoader,
  ];
}