import { classnames, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import {
  useAccordionItem as useSimplexAccordionItem,
  type AccordionItemProps as SimplexAccordionItemProps,
} from 'simplex_hook'

import styles from './styles/AccordionItem.module.css'
import { useCallback } from 'react'
import { useAccordionContext } from './accordion_context'

interface Props extends HTMLSimplexuiProps<'div'> {
  ref?: ReactRef<HTMLButtonElement>
  dark?: boolean
  title: string
  subtitle?: string
}

export type AccordionItemProps = Props & SimplexAccordionItemProps

export function useAccordionItem(props: AccordionItemProps) {
  const context = useAccordionContext()

  const {
    as,
    ref,
    title,
    dark = false,
    subtitle,
    children,
    ...otherProps
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)

  const {
    headerProps,
    isDisabled,
    isActive,
  } = useSimplexAccordionItem(otherProps, context, domRef)

  /* Base */
  const baseClasses = classnames({
    dark: dark,
  },
  'simplexui-themes',
  styles.base,
  )

  const getPropsBase = useCallback(() => ({
    'className': baseClasses,
    'data-active': isActive || undefined,
    'data-disabled': isDisabled || undefined,
  }), [
    domRef,
    isActive,
  ])

  /* header */
  const headerClasses = classnames({
  },
  'simplexui-themes',
  styles.header,
  )

  const getHeaderProps = useCallback(() => ({
    ...headerProps,
    className: headerClasses,
  }), [
    headerProps,
    headerClasses,
    domRef,
  ])

  return {
    Element,
    title,
    subtitle,
    children,
    getPropsBase,
    getHeaderProps,
  }
}
