import * as React from 'react'
import { AccordionState } from './index'
import { chain, usePress, type PressHookProps } from 'react-aria'

export interface AccordionItemState {
  readonly isDisabled: boolean
  changeValue: (id: React.Key) => void
  readonly isActive: boolean
  readonly key: React.Key
  headerProps: React.DOMAttributes<HTMLElement>
}

export interface AccordionItemProps extends PressHookProps {
  disabled?: boolean
  key?: React.Key
  default?: React.Key
}

export default function useAccordionItem(props: AccordionItemProps, AccordionState: AccordionState) {
  const key = React.useId()
  const isDisabled = AccordionState.isDisabled || props.disabled || false
  const { toggleValue } = AccordionState

  const changeValue = () => {
    if (isDisabled) return
    toggleValue(key)
  }

  const { pressProps } = usePress({
    ...props,
    onPress: chain(changeValue(), props.onPress),
    isDisabled,
  })

  const state: AccordionItemState = {
    isDisabled,
    changeValue,
    isActive: AccordionState.isActive(key),
    key,
    headerProps: {
      ...pressProps
    }
  }

  return {
    state,
  }
}
