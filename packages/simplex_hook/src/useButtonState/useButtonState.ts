import { RefObject } from 'packages/core/src'
import { ButtonProps, ButtonState } from './type'
import React from 'react'

export default function useButton(props: ButtonProps, ref: RefObject<HTMLButtonElement | null>): ButtonState {
  const [isFocused, setIsFocused] = React.useState(false)

  const buttonProps = React.useMemo(() => ({
    onFocusCapture: (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    },
    onBlur: (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    },
  }), [])

  return {
    props: buttonProps,
    isFocused,
  }
}
