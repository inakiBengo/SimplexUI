import { forwardRef } from 'react'
import { useAccordion, AccordionProps } from './useAccordion'
import { AccordionProvider } from './accordion_context'

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    Element,
    domRef,
    children,
    context,
    getBaseProps,
  } = useAccordion({ ...props, ref })

  return (
    <AccordionProvider value={context}>
      <Element ref={domRef} {...getBaseProps()}>
        { children }
      </Element>
    </AccordionProvider>
  )
})

Accordion.displayName = 'simplexui.accordion'

export default Accordion
