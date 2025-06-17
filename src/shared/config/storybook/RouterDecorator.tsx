import type { Decorator } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

export const RouterDecorator = (): Decorator => {
  const component: Decorator = (Story, context) => (
    <MemoryRouter initialEntries={['/']}>{Story(context.args)}</MemoryRouter>
  )

  return component
}
