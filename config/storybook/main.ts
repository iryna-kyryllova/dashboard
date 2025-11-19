import type { StorybookConfig } from '@storybook/react-webpack5'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import type webpack from 'webpack'
import { Paths } from '../webpack/types'
import { cssLoader, svgInlineLoader, svgComponentLoader } from '../webpack/loaders'

// ESM dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (webpackConfig: webpack.Configuration) => {
    // Paths and extensions settings
    const paths: Paths = {
      entry: '',
      build: '',
      html: '',
      src: resolve(__dirname, '../../src')
    }

    // Module resolution
    webpackConfig.resolve = webpackConfig.resolve || {}
    webpackConfig.resolve.modules = [...(webpackConfig.resolve.modules || []), paths.src]
    webpackConfig.resolve.extensions = [...(webpackConfig.resolve.extensions || []), '.ts', '.tsx']

    // CSS loader
    webpackConfig.module.rules.push(cssLoader(true))

    // SVG Loaders
    webpackConfig.module!.rules = webpackConfig.module!.rules.map((rule) => {
      if (typeof rule === 'object' && rule?.test instanceof RegExp && rule.test.test('.svg')) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })

    webpackConfig.module!.rules.push(svgComponentLoader, svgInlineLoader)

    return webpackConfig
  }
}
export default config
