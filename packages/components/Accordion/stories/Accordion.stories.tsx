import { Accordion } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
}
export default config

type Story = StoryObj<typeof Accordion>

export const Default: Story = {

}
