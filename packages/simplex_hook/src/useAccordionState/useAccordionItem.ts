import * as React from 'react'
import { AccordionState } from './index'
import { mergeProps, usePress } from 'react-aria'
import type { PressProps, Key, ReactRef } from '../types'

export interface AccordionItemState {
  readonly isDisabled: boolean
  readonly isActive: boolean
  readonly isFocused: boolean
  headerProps: React.DOMAttributes<HTMLButtonElement>
  readonly key: Key
}

export interface AccordionItemProps extends PressProps {
  disabled?: boolean
  key?: Key
  default?: Key
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
}

export default function useAccordionItem(
  props: AccordionItemProps,
  accordionState: AccordionState,
  ref?: ReactRef<HTMLButtonElement>): AccordionItemState {
  const isDisabled = props.disabled || accordionState.isDisabled || false
  const [isFocused, setIsFocused] = React.useState(false)
  const key = React.useMemo(() => props.key || accordionState.generateKey(), [props.key])
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

  const headerProps = React.useMemo(() => ({
    ...mergeProps(
      pressProps,
    ),
    ref: refHeader,
    onFocus: (e: React.FocusEvent) => {
      if (props.onFocus) props.onFocus(e)
      accordionState.setFocus(key)
      setIsFocused(true)
    },
    onBlur: (e: React.FocusEvent) => {
      if (props.onBlur) props.onBlur(e)
      accordionState.setFocus(null)
      setIsFocused(false)
    },
  }), [pressProps, refHeader, key, accordionState])

  return {
    key,
    headerProps,
    isDisabled,
    isFocused,
    isActive: accordionState.isActive(key),
  }
}
