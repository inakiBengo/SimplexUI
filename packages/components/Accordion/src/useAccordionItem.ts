import { classnames, useDOMRef, type HTMLSimplexuiProps, type ReactRef } from 'core'
import {
  useAccordionItem as useSimplexAccordionItem,
  type AccordionItemProps as SimplexAccordionItemProps,
} from 'simplex_hook'

import './styles/AccordionItem.css'
import { useCallback } from 'react'
import { useAccordionContext } from './accordion_context'

export type AccordionItemRef = HTMLButtonElement | null
interface Props extends HTMLSimplexuiProps<'div', 'title'> {
  ref?: ReactRef<HTMLButtonElement | null>
  dark?: boolean
  title: string
  subtitle?: string
}

export type AccordionItemProps = Props & SimplexAccordionItemProps

export function useAccordionItem(props: AccordionItemProps) {
  const context = useAccordionContext()
  const { variant, classItem, split } = context

  const {
    as,
    ref,
    title,
    dark = false,
    subtitle,
    children,
    className,
    ...otherProps
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)

  const {
    baseProps,
    buttonProps,
    contentProps,
    isDisabled,
    isActive,
    key,
  } = useSimplexAccordionItem(otherProps, context, domRef)

  /* Base */
  const baseClasses = classnames({
    dark: dark,
    ['sx-accordionItem-' + variant]: split,
    'sx-accordionItem-divider': !split,
  },
  'simplexui-themes',
  'sx-accordionItem',
  classItem,
  className,
  )

  const getPropsBase = useCallback(() => ({
    'className': baseClasses,
    'data-active': isActive || undefined,
    'data-disabled': isDisabled || undefined,
    id: key,
    ...baseProps,
  }), [
    domRef,
    isActive,
    isDisabled,
    baseClasses,
  ])

  /* header */
  const buttonClasses = classnames({
  },
  'simplexui-themes',
  'sx-accordionItem-header',
  )

  const getButtonProps = useCallback(() => ({
    ...buttonProps,
    className: buttonClasses,
  }), [
    buttonProps,
    buttonClasses,
    domRef,
  ])

  const contentClasses = classnames({},
    'simplexui-themes',
    'sx-accordionItem-content',
  )

  const getContentProps = useCallback(() => ({
    ...contentProps,
    className: contentClasses,
  }), [
    isActive,
  ])

  return {
    Element,
    title,
    subtitle,
    children,
    getPropsBase,
    getButtonProps,
    getContentProps,
    isActive,
    isDisabled,
  }
}
