import { classnames, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import {
  useAccordionItem as useSimplexAccordionItem,
  type AccordionItemProps as SimplexAccordionItemProps,
} from 'simplex_hook'

import styles from './styles/AccordionItem.module.css'
import { useMemo } from 'react'
import { useAccordionContext } from './accordion_context'

interface Props extends HTMLSimplexuiProps<'div'> {
  ref?: ReactRef<HTMLDivElement>
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
    state,
    wrapProps: simpWrapProps,
    headerProps: simpHeaderProps,
  } = useSimplexAccordionItem(otherProps, context)

  const {
    isDisabled,
    isActive,
  } = state

  /* Wrap */
  const wrapClasses = classnames({
    dark: dark,
  },
  'simplexui-themes',
  styles.wrap,
  )

  const wrapProps = useMemo(() => ({
    ...simpWrapProps,
    'className': wrapClasses,
    'data-disabled': isDisabled,
    'data-active': isActive,
    'ref': domRef,
  }), [
    simpWrapProps,
    wrapClasses,
    isDisabled,
    isActive,
    domRef,
  ])

  /* header */
  const headerClasses = classnames({
  },
  'simplexui-themes',
  styles.header,
  )

  const headerProps = useMemo(() => ({
    ...simpHeaderProps,
    className: headerClasses,
  }), [
    simpHeaderProps,
    headerClasses,
  ])

  return {
    Element,
    wrapProps,
    headerProps,
    title,
    subtitle,
    children,
  }
}
