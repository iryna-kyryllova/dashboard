import path from 'path'
import webpack from 'webpack'
import { Paths } from '../webpack/types'
import { cssLoader } from '../webpack/loaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: Paths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '../../src')
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(cssLoader(true))
  return config
}
