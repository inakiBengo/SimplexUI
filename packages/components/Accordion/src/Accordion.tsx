import { forwardRef } from 'react'
import { useAccordion, AccordionProps } from './useAccordion'

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    Element,
    domRef,
    wrapProps,
    children,
    context
  } = useAccordion({ ...props, ref })

  return (
    <Provider value={context}>
      <Element ref={domRef} {...wrapProps}>
        { children }
      </Element>
    </Provider>
  )
})

Accordion.displayName = 'simplexui.accordion'

export default Accordion
