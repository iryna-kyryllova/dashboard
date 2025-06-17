import type { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/Theme'

export const ThemeDecorator = (theme: Theme): Decorator => {
  const component: Decorator = (Story, context) => (
    <div className={`app ${theme}`}>{Story(context.args)}</div>
  )

  return component
}
