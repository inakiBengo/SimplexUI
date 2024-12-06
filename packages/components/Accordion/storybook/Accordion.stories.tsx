import { Accordion } from '../../index'
import { Meta, StoryObj } from '@storybook/react'
import AccordionItem from '../src/AccordionItem'
import './style.css'

const config: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
}
export default config

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => {
    const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam nemo, facere et dicta expedita, nostrum molestiae nihil rem molestias, exercitationem enim debitis voluptate iste eum dolorum odio sunt ipsa!'
    return (
      <Accordion {...args} variant='shadow' split className='base' defaultActive={['0']}>
        <AccordionItem title='Accordion 1' subtitle='Subtitle accordion 1' itemKey='0'>
          <p>{ title }</p>
        </AccordionItem>
        <AccordionItem title='Accordion 2' subtitle='Subtitle accordion 1'>
          <p>Este es el segundo Accordion</p>
        </AccordionItem>
        <AccordionItem title='Accordion 3' subtitle='Subtitle accordion 1'>
          <p>Este es el segundo Accordion</p>
        </AccordionItem>
      </Accordion>
    )
  },
}
