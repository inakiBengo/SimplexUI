import { Key } from 'core'
import React from 'react'
type Option = string | object

export interface AutocompleteProps<T extends object | string> {
  /* Controlled state */
  value?: Key
  defaultValue?: Key
  onChange?: (key: string) => void

  /* Controlled open options */
  open?: boolean
  autoOpen?: boolean /* like autofocus but when opening the options list when rendering the component */
  onOpenChange?: (open: boolean) => void

  options?: T[]
  filterOptions?: (option: T, inputValue: string) => boolean
  getLabel?: (option: T) => string | undefined

  /* generic events */
  onFocus?: () => void
  onBlur?: () => void
  onSelect?: (label: string, option: T | undefined) => void
  onClear?: () => void

  fillOut?: boolean
  placeholder?: string
}

export interface AutocompleteState<T> {
  highlightedLabel: Key | null
  isOpen: boolean
  filteredOptions: T[]
  value: string
  isInputFocused: boolean
}
