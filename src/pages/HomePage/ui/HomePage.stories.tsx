import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/Theme'
import HomePage from './HomePage'

const meta = {
  title: 'pages/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
