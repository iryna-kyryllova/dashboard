import type { Preview } from '@storybook/react-webpack5'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { Theme } from 'app/providers/Theme'
import 'app/styles/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [RouterDecorator(), ThemeDecorator(Theme.LIGHT)]
}

export default preview
