import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, ButtonStyle } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonStyle: ButtonStyle.PRIMARY
  }
}
