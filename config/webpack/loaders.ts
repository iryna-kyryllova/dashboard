import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const fileLoader = {
  test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
  type: 'asset/resource'
}

export const svgInlineLoader = {
  test: /\.svg$/i,
  type: 'asset',
  resourceQuery: /url/ // *.svg?url
}

export const svgComponentLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
  use: ['@svgr/webpack']
}

export const cssLoader = (isDevelopment: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        esModule: false,
        modules: {
          auto: true,
          localIdentName: isDevelopment ? '[name]__[local]' : '[hash:base64:8]'
        }
      }
    },
    'sass-loader'
  ]
})

export const tsLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
}

export const babelLoader = {
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
