import * as React from 'react'
import { AccordionState } from './index'
import { mergeProps, usePress } from 'react-aria'
import type { PressProps, Key, ReactRef } from '../types'

export interface AccordionItemState {
  readonly isDisabled: boolean
  readonly isActive: boolean
  buttonProps: React.DOMAttributes<HTMLButtonElement>
  contentProps: React.AriaAttributes & { role: React.AriaRole }
  baseProps: React.DOMAttributes<HTMLDivElement>
  readonly key: Key
}

export interface AccordionItemProps extends PressProps, React.DOMAttributes<HTMLDivElement> {
  disabled?: boolean
  itemKey?: Key
  default?: Key
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
}

export type RefAccordionItem = ReactRef<HTMLButtonElement | null>

export default function useAccordionItem(
  props: AccordionItemProps,
  accordionState: AccordionState,
  ref?: RefAccordionItem): AccordionItemState {
  const isDisabled = props.disabled || accordionState.isDisabled || false
  const key = React.useMemo(() => props.itemKey || accordionState.generateKey(), [props.itemKey])
  const isActive = accordionState.isActive(key)
  const refHeader = ref || React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    accordionState.register(key, refHeader)
  }, [key, refHeader, accordionState])

  const { pressProps } = usePress({
    onPress: (e) => {
      if (props?.onPress) props?.onPress(e)
      accordionState.toToggle(key)
    },
    isDisabled,
    preventFocusOnPress: true,
    allowTextSelectionOnPress: false,
  })

  const {
    disabled,
    itemKey,
    default: defaultActive,
    onFocus,
    onBlur,
    ...baseProps
  } = props

  const buttonProps = React.useMemo(() => ({
    ...mergeProps(
      pressProps,
    ),
    ref: refHeader,
    onFocus: (e: React.FocusEvent) => {
      if (props.onFocus) props.onFocus(e)
      accordionState.setFocus(key)
    },
    onBlur: (e: React.FocusEvent) => {
      if (props.onBlur) props.onBlur(e)
      accordionState.setFocus(null)
    },
    type: 'button',
    role: 'button',
    id: key + '-button',
    'aria-expanded': isActive,
    'aria-controls': key + '-content',
  }), [pressProps, refHeader, key, isActive])

  const contentProps = React.useMemo(() => ({
    role: 'region',
    id: key + '-content',
    'aria-hidden': isActive,
    'aria-labelledby': key + '-button',
  }), [isActive, key])

  return {
    key,
    baseProps,
    buttonProps,
    contentProps,
    isDisabled,
    isActive: accordionState.isActive(key),
  }
}
