import { forwardRef } from 'react'
import { useAccordionItem, type AccordionItemProps } from './useAccordionItem'

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const {
    Element,
    domRef,
  } = useAccordionItem({ ...props, ref })

  return (
    <Element ref={domRef}>
    </Element>
  )
})

AccordionItem.displayName = 'simplexui.accordion_item'

export default AccordionItem
