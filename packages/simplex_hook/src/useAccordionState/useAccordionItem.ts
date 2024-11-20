import * as React from 'react'
import { AccordionState } from './index'
import { mergeProps, usePress } from 'react-aria'
import type { PressProps, Key, Ref } from '../types'

export interface AccordionItemState {
  readonly isDisabled: boolean
  toggleValue: () => void
  readonly isActive: boolean
  readonly key: Key
}

export interface AccordionItemProps extends PressProps {
  disabled?: boolean
  key?: Key
  default?: Key
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
}

export default function useAccordionItem(props: AccordionItemProps, accordionState: AccordionState, ref?: Ref) {
  const isDisabled = props.disabled || accordionState.isDisabled || false
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
    },
    onBlur: (e: React.FocusEvent) => {
      if (props.onBlur) props.onBlur(e)
      accordionState.setFocus(null)
    },
  }), [pressProps, refHeader, key, accordionState])

  return {
    headerProps,
    isDisabled,
    isActive: accordionState.isActive(key),
  }
}
