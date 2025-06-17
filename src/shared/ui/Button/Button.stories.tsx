import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/Theme'
import { Button, ButtonStyle } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonStyle: ButtonStyle.PRIMARY,
    children: 'Button'
  }
}

export const PrimaryDark: Story = {
  args: {
    buttonStyle: ButtonStyle.PRIMARY,
    children: 'Button'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Text: Story = {
  args: {
    buttonStyle: ButtonStyle.TEXT,
    children: 'Button'
  }
}

export const TextDark: Story = {
  args: {
    buttonStyle: ButtonStyle.TEXT,
    children: 'Button'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Outline: Story = {
  args: {
    buttonStyle: ButtonStyle.OUTLINE,
    children: 'Button'
  }
}

export const OutlineDark: Story = {
  args: {
    buttonStyle: ButtonStyle.OUTLINE,
    children: 'Button'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
