import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../../index'

const config: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
}
export default config

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483.png',
  },
}
