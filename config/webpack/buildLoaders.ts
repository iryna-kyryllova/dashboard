import { RuleSetRule } from 'webpack'
import {
  fileLoader,
  svgInlineLoader,
  svgComponentLoader,
  cssLoader,
  tsLoader,
  babelLoader
} from './loaders'

export function buildLoaders(): RuleSetRule[] {
  const stylesLoader = cssLoader(true)
  return [fileLoader, svgInlineLoader, svgComponentLoader, stylesLoader, babelLoader, tsLoader]
}
