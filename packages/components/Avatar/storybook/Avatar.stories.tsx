import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from '../../index'

const config: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
}
export default config

export const Default: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg',
    badge: {
      value: '4',
      color: 'primary',
    },
    size: 'lg',
    radius: 'full',
  },
}

const pepe = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

export const Group: StoryObj<typeof AvatarGroup> = {
  render: () => {
    return (
      <AvatarGroup size='lg' disabled>
        {
          pepe.map((value, index) => {
            if (index > 2) return
            return (
              <Avatar key={index} fallback={value} />
            )
          })
        }
        <Avatar fallback={'+' + pepe.length} />
      </AvatarGroup>
    )
  },
}
