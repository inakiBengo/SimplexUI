import React from 'react'

export interface ButtonProps {
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void
}

export interface ButtonState {
  props: React.DOMAttributes<HTMLButtonElement>
  isFocused: boolean
}
