import { classnames, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import { useCallback } from 'react'
import {
  useAutocomplete as useSimplexAutocomplete,
  type AutocompleteProps as SimplexProps,
} from 'simplex_hook'
import './styles/Autocomplete.css'

export type RefAutocomplete = HTMLInputElement | null
export interface AutocompleteProps<Value extends object | string>
  extends HTMLSimplexuiProps<'input', 'onChange' | 'onSelect'>,
  SimplexProps<Value> {
  ref?: ReactRef<RefAutocomplete>
  disableClear?: boolean
  placeholder?: string
  label?: string
  /* delete */
  onChange?: (key: string) => void
  onSelect?: (label: string, option: Value | undefined) => void
  /* delete */
  renderRoot?: (
    rootProps: React.HTMLAttributes<HTMLElement>,
    inputProps: React.HTMLAttributes<HTMLInputElement>,
    clearProps: React.HTMLAttributes<HTMLButtonElement>
  ) => React.ReactNode
  renderOption?: (
    props: React.HTMLAttributes<HTMLElement>,
    value: Value,
    index: number,
  ) => React.ReactNode
}

export const useAutocomplete = <Value extends object | string>(props: AutocompleteProps<Value>) => {
  const {
    as,
    ref,
    getLabel,
    label,
    disableClear,
    renderRoot,
    renderOption,
    placeholder,
    ...otherProps
  } = props

  const Element = as || 'div'

  const domRef = useDOMRef<HTMLInputElement>(ref)

  const {
    wrapperProps,
    labelProps,
    inputProps,
    getOptionProps: optionProps,
    filteredOptions,
    value,
    highlightedLabel,
    clearButtonProps,
    isInputFocused,
  } = useSimplexAutocomplete({
    ...otherProps,
    getLabel,
    placeholder,
  }, domRef)

  /* Wrapper */
  const wrapperClasses = classnames({},
    'sx-autocomplete',
  )

  const getWrapperProps = useCallback(() => ({
    ...wrapperProps,
    className: wrapperClasses,
  }), [wrapperProps])

  /* InputRoot */
  const inputRootClasses = classnames({},
    'sx-autocomplete-inputRoot',
  )

  const getInputRootProps = useCallback(() => ({
    'data-focus': isInputFocused || undefined,
    'data-value': value || placeholder || undefined,
    className: inputRootClasses,
  }), [isInputFocused, value])

  /* Label */
  const labelClasses = classnames({},
    'sx-autocomplete-label',
  )

  const getLabelProps = useCallback(() => ({
    ...labelProps,
    className: labelClasses,
  }), [])

  /* Input */
  const inputClasses = classnames({},
    'sx-autocomplete-input',
  )

  const getInputProps = useCallback(() => ({
    ...inputProps,
    className: inputClasses,
  }), [inputProps])

  /* Options */
  const optionsClasses = classnames({},
    'sx-autocomplete-options',
  )

  const getOptionsProps = useCallback(() => ({
    className: optionsClasses,
  }), [])

  /* Option */
  const optionClasses = classnames({
  }, 'sx-autocomplete-option')

  const getOptionProps = useCallback((label: string) => ({
    ...optionProps(label),
    'data-focus': highlightedLabel === label || undefined,
    'data-selected': value === label || undefined,
    className: optionClasses,
  }), [highlightedLabel, optionProps, value])

  /* Clear Button */
  const getClearButtonProps = useCallback(() => ({
    ...clearButtonProps,
    className: 'sx-autocomplete-clear-button simplexui-themes',
  }), [clearButtonProps])

  return {
    Element,
    getLabel,
    label,
    value,
    disableClear,
    filteredOptions,
    getWrapperProps,
    getLabelProps,
    getInputRootProps,
    getInputProps,
    getOptionsProps,
    getOptionProps,
    getClearButtonProps,
    /* render */
    renderRoot,
    renderOption,
  }
}
