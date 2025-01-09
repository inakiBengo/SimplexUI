import { classnames, useDOMRef, type GenericStyles, type HTMLSimplexuiProps, type ReactRef } from 'core'
import { useCallback, useMemo } from 'react'
import {
  useAccordion as useSimplexAccordion,
  AccordionProps as SimplexAccordionProps,
  type AccordionState,
} from 'simplex_hook'
import './styles/Accordion.css'

export type AccordionRef = HTMLDivElement | null

interface Props extends HTMLSimplexuiProps<'div', 'onChange'> {
  ref?: ReactRef<AccordionRef>
  color?: GenericStyles.Color
  radius?: GenericStyles.Radius
  size?: GenericStyles.Size
  variant?: 'light' | 'shadow' | 'outlined'
  split?: boolean
  classItem?: string
}

export interface AccordionContext extends AccordionState {
  variant?: GenericStyles.Variant
  classItem?: string
  split?: boolean
}
export type AccordionProps = Props & SimplexAccordionProps

export function useAccordion(props: AccordionProps) {
  const {
    as,
    ref,
    children,
    variant = 'light',
    split = false,
    className,
    classItem,
    ...otherProps
  } = props

  const Element = as || 'div'
  const { state, baseProps } = useSimplexAccordion(otherProps)
  const domRef = useDOMRef(ref)

  const context = useMemo<AccordionState>(() => ({
    variant,
    split,
    classItem,
    ...state,
  }), [state])

  const classes = classnames({
    'sx-accordion-split': split,
    ['sx-accordion-' + variant]: !split,
  },
  'simplexui-themes',
  'sx-accordion',
  className,
  )

  const getBaseProps = useCallback(() => ({
    ...baseProps,
    className: classes,
  }), [baseProps, className])

  return {
    Element,
    domRef,
    children,
    context,
    getBaseProps,
  }
}
