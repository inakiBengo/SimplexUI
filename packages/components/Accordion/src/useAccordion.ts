import { GenericStyles, HTMLSimplexuiProps, ReactRef, useDOMRef } from '@simplexui/core'

export interface Props extends HTMLSimplexuiProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  color?: GenericStyles.Color
  radius?: GenericStyles.Radius
  size?: GenericStyles.Size
  variant?: GenericStyles.Variant
}

export type AccordionProps = Props

export function useAccordion(props: AccordionProps) {
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
