import path from 'path'
import webpack from 'webpack'
import { Paths } from '../webpack/types'
import { cssLoader, svgInlineLoader, svgComponentLoader } from '../webpack/loaders'

export default ({ config }: { config: webpack.Configuration }) => {
  // Paths and extensions settings
  const paths: Paths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '../../src')
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  // CSS Loader
  config.module.rules.push(cssLoader(true))

  // SVG Loaders
  config.module.rules = config.module.rules.map((rule) => {
    if (typeof rule === 'object' && rule?.test instanceof RegExp && rule.test.test('.svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module.rules.push(svgComponentLoader, svgInlineLoader)

  return config
}
