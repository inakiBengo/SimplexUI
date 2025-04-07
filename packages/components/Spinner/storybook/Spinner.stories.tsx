import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '../../index'

const config: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner',
}
export default config

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
}
