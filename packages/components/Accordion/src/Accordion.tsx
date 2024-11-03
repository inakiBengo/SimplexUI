import { forwardRef } from 'react'
import { useAccordion, AccordionProps } from './useAccordion'

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    Element,
    domRef,
  } = useAccordion({ ...props, ref })

  return (
    <Element ref={domRef}>
      pepe
    </Element>
  )
})

Accordion.displayName = 'simplexui.accordion'

export default Accordion
