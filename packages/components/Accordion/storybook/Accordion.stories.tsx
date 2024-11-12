import { Accordion } from '../../index'
import { Meta, StoryObj } from '@storybook/react'
import AccordionItem from '../src/AccordionItem'

const config: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
}
export default config

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: args => (
    <Accordion {...args}>
      <AccordionItem title='Accordion 1' subtitle='Subtitle accordion 1'>
      </AccordionItem>
    </Accordion>
  ),
}
