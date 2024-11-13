import * as React from 'react'
import { AccordionState } from './index'
import { chain, Key, usePress, type PressHookProps } from 'react-aria'

export interface AccordionItemState {
  readonly isDisabled: boolean
  toggleValue: () => void
  readonly isActive: boolean
  readonly key: Key
}

export interface AccordionItemProps extends Omit<PressHookProps, 'ref' | 'isDisabled'> {
  disabled?: boolean
  key?: Key
  default?: Key
}

export default function useAccordionItem(props: AccordionItemProps, accordionState: AccordionState) {
  const isDisabled = props.disabled || accordionState.isDisabled || false
  const key = React.useRef(accordionState.generateId()).current
  const {
    onPress,
  } = props

  const { pressProps } = usePress({
    onPress: (e) => {
      accordionState.toToggle(key)
      onPress && onPress(e)
    },
  })

  return {
    isDisabled,
    key,
    activeValues: accordionState.activeValues,
    isActive: accordionState.isActive(key),
    props: {
      ...pressProps,
    },
  }
}
