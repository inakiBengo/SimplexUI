import { HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'

export interface Props extends HTMLSimplexuiProps {
  ref: ReactRef<HTMLDivElement | null>
}

export type AccordionItemProps = Props

export function useAccordionItem(props: AccordionItemProps) {
  const {
    as,
    ref,
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)

  return {
    Element,
    domRef,
  }
}
