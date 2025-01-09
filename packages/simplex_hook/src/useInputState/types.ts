import { RefObject } from 'core'
import React from 'react'

export interface InputProps {
  helperText?: string
  invalid?: boolean
  ref?: RefObject<HTMLInputElement | null>
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  type?: string
  autoComplete?: string
}
