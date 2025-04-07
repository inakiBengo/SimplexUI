import React from 'react'

export interface InputProps {
  helperText?: string
  invalid?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  type?: React.HTMLInputTypeAttribute
  autoComplete?: React.HTMLInputAutoCompleteAttribute
  native?: boolean
  errorMessage?: string
}
