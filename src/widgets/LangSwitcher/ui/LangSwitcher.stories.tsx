import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/Theme'
import { LangSwitcher } from './LangSwitcher'

const meta = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
