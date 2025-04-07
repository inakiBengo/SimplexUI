import {
  AutocompleteProps,
  useAutocomplete as useSimplexAutocomplete,
} from 'simplex_hook'
import { useRef, useCallback } from 'react'
import './styles/Autocomplete.css'
import { useInputProps } from '../../Input/src/useInput'
import { useDOMRef } from 'core'

interface Props extends Omit<useInputProps, 'value' | 'defaultValue' | 'onChange'> {
  disableClear?: boolean
}

export type useAutocompleteProps<T extends string | object> = Props & AutocompleteProps<T>

export const useAutocomplete = <T extends string | object>(props: useAutocompleteProps<T>) => {
  const {
    as,
    ref,
    disableClear = false,
    value,
    defaultValue,
    onChange,
    open,
    onOpenChange,
    options,
    filterOptions,
    getLabel: useGetLabel,
    fillOut,
    ...otherProps
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)
  const domScrollRef = useRef(null)

  const {
    isOpen,
    isPopupUp,
    highlightedIndex,
    filteredOptions,
    getLabel,
    wrapperProps,
    inputProps,
    listOptionsProps,
    clearButtonProps,
    getOptionProps: getOption,
  } = useSimplexAutocomplete({
    value,
    defaultValue,
    onChange,
    open,
    onOpenChange,
    options,
    filterOptions,
    getLabel: useGetLabel,
    fillOut,
  },
  domRef,
  domScrollRef)

  const getRootProps = useCallback(() => ({
    ...wrapperProps,
    'data-open': isOpen || undefined,
    'data-popup-up': isPopupUp || undefined,
    className: 'simplexui-themes sx-autocomplete',
  }), [wrapperProps, isPopupUp, isOpen])

  const getInputProps = useCallback<() => useInputProps>(() => ({
    ...inputProps,
    ...otherProps,
    className: 'simplexui-themes',
  }), [wrapperProps])

  const getListOptionsProps = useCallback(() => ({
    ...listOptionsProps,
    className: 'simplexui-themes sx-reset sx-autocomplete-list',
  }), [wrapperProps])

  const getOptionProps = useCallback((index: number) => ({
    ...getOption(index),
    'data-select': highlightedIndex === index || undefined,
    className: 'simplexui-themes sx-autocomplete-option',
  }), [getOption, highlightedIndex])

  const getClearButtonProps = useCallback(() => ({
    ...clearButtonProps,
    className: 'simplexui-themes sx-reset sx-autocomplete-clearButton',
  }), [wrapperProps])

  return {
    Element,
    filteredOptions,
    getLabel,
    disableClear,
    getRootProps,
    getInputProps,
    getListOptionsProps,
    getClearButtonProps,
    getOptionProps,
  }
}
