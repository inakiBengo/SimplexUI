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
        <p>Hola mundo como estas</p>
      </AccordionItem>
      <AccordionItem title='Accordion 1' subtitle='Subtitle accordion 1'>
        <p>Este es el segundo Accordion</p>
      </AccordionItem>
      <AccordionItem title='Accordion 1' subtitle='Subtitle accordion 1'>
        <p>Este es el segundo Accordion</p>
      </AccordionItem>
    </Accordion>
  ),
}
