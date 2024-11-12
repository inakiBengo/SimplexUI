import * as React from 'react'
import { AccordionState } from './index'
import { chain, Key, usePress, type PressHookProps } from 'react-aria'

export interface AccordionItemState {
  readonly isDisabled: boolean
  toggleValue: () => void
  readonly isActive: boolean
  readonly key: Key
}

export interface AccordionItemProps extends Omit<PressHookProps, 'ref'> {
  disabled?: boolean
  key?: Key
  default?: Key
}

export default function useAccordionItem(props: AccordionItemProps, AccordionState: AccordionState) {
  const key = React.useRef(props.key).current ?? React.useId()
  const isDisabled = AccordionState.isDisabled || props.disabled || false

  const toggleValue = () => {
    if (isDisabled) return
    AccordionState.onToggle(key)
  }

  const { pressProps } = usePress({
    ...props,
    onPress: chain(toggleValue, props.onPress),
    isDisabled,
  })

  const wrapProps = {
    id: key,
  }

  const headerProps = {
    ...pressProps,
  }

  const state: AccordionItemState = {
    isDisabled,
    toggleValue,
    isActive: AccordionState.isActive(key),
    key,
  }

  return {
    state,
    wrapProps,
    headerProps,
  }
}
