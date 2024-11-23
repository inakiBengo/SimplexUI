import { classnames, GenericStyles, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import { useCallback, useMemo } from 'react'
import {
  useAccordion as useSimplexAccordion,
  AccordionProps as SimplexAccordionProps,
  type AccordionState,
} from 'simplex_hook'
import styles from './styles/Accordion.module.css'

interface Props extends HTMLSimplexuiProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  color?: GenericStyles.Color
  radius?: GenericStyles.Radius
  size?: GenericStyles.Size
  variant?: GenericStyles.Variant
}

export interface AccordionContext extends AccordionState {
}
export type AccordionProps = Props & SimplexAccordionProps

export function useAccordion(props: AccordionProps) {
  const {
    as,
    ref,
    children,
    ...otherProps
  } = props

  const Element = as || 'div'
  const { state, baseProps } = useSimplexAccordion(otherProps)
  const domRef = useDOMRef(ref)

  const context = useMemo<AccordionState>(() => ({
    ...state,
  }), [state])

  const classes = classnames({}, 'simplexui-themes', styles.base)

  const getBaseProps = useCallback(() => ({
    ...baseProps,
    className: classes,
  }), [baseProps])

  return {
    Element,
    domRef,
    children,
    context,
    getBaseProps,
  }
}
