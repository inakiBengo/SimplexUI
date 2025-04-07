import { Key } from 'core'

export interface AutocompleteProps<T extends object | string | number> {
  /* Controlled state */
  value?: string | number
  defaultValue?: string | number
  onChange?: (e: string | number) => void

  /* Controlled open options */
  open?: boolean
  onOpenChange?: (open: boolean) => void

  options?: T[]
  filterOptions?: (option: T, inputValue: string) => boolean
  getLabel?: (option: T) => string | number | undefined

  /* generic events */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onSelectOption?: (label: string, option: T | undefined) => void
  onClear?: () => void

  fillOut?: boolean
  placeholder?: string
}

export interface AutocompleteState<T> {
  highlightedIndex: number
  isOpen: boolean
  filteredOptions: T[]
  getLabel?: (option: T) => string | number | undefined
  isPopupUp: boolean
}
