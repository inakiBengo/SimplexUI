import React from 'react'
import { Key } from '../types'
import { useControllState } from '../useControllState/useControllState'
import { createCollectionManager, RefObject, useId } from 'core'
import { AutocompleteProps, AutocompleteState } from './types'

const defaultGetLabel = (option: string | { label?: string }) => (
  typeof option === 'string' ? option : option.label
)

export default function useAutocomplete<Value extends object | string>(props: AutocompleteProps<Value>, inputRef: RefObject<HTMLInputElement | null>) {
  const {
    value,
    defaultValue,
    onChange,
    open,
    autoOpen,
    onOpenChange,
    onFocus,
    onBlur,
    onSelect,
    onClear,
    options = [],
    filterOptions,
    getLabel = defaultGetLabel,
    fillOut = false,
    placeholder,
  } = props

  const id = useId()
  const { getKey, filterByKey, getCollection } = createCollectionManager(options, {
    getKey: getLabel,
    filterByKey: filterOptions,
    keyName: 'Label',
    componentName: 'Autocmplete',
    loop: true,
  })
  const [highlightedKey, setHighlightedKey] = React.useState<Key>('')
  const [valueSelectedState, setValueSelectedState] = React.useState('')
  const [isInputFocused, setIsInputFocused] = React.useState(false)
  const [isOpen, setIsOpen] = useControllState<boolean>(
    open,
    autoOpen || false,
    onOpenChange,
    'useAutocomplete open state',
  )
  const [valueState, setValueState] = useControllState<string>(
    value,
    defaultValue || '',
    onChange,
    'useAutocomplete value state',
  )
  const filteredOptions = filterByKey(valueState)

  const state = React.useMemo<AutocompleteState<Value>>(() => ({
    value: valueState,
    isOpen,
    filteredOptions: isOpen ? filteredOptions : [],
    highlightedLabel: highlightedKey,
    isInputFocused,
  }), [valueState, options, isOpen, highlightedKey, isInputFocused])

  /* Wrapper */
  const handleWrapperKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (!(e.target === inputRef.current)) return
    let newHighlightedKey = highlightedKey

    switch (e.key) {
      case ('ArrowDown'): {
        e.preventDefault()
        setIsOpen(true)
        if (!highlightedKey) {
          const firstOption = filteredOptions[0]
          newHighlightedKey = firstOption ? getKey(firstOption) : ''
        } else {
          const keyList = filteredOptions.map(value => getKey(value))
          const currentIndex = keyList.indexOf(highlightedKey)
          const nextKey = keyList[(currentIndex + 1) % keyList.length]
          newHighlightedKey = nextKey ?? ''
        }
        setHighlightedKey(newHighlightedKey)
        break
      }
      case ('ArrowUp'): {
        e.preventDefault()
        setIsOpen(true)
        if (!highlightedKey) {
          const lastOption = filteredOptions[filteredOptions.length - 1]
          newHighlightedKey = lastOption ? getKey(lastOption) : ''
        } else {
          const keyList = filteredOptions.map(value => getKey(value))
          const currentIndex = keyList.indexOf(highlightedKey)
          const prevKey = keyList[(currentIndex - 1 + keyList.length) % keyList.length]
          newHighlightedKey = prevKey ?? ''
        }
        setHighlightedKey(newHighlightedKey)
        break
      }
      case ('Escape'): {
        e.preventDefault()
        setIsOpen(false)
        setHighlightedKey('')
        break
      }
      case ('Enter'): {
        e.preventDefault()
        setIsOpen(false)
        if (!highlightedKey) return
        setValueState(highlightedKey)
        setValueSelectedState(highlightedKey)
      }
    }
  }, [highlightedKey, inputRef, filteredOptions])

  const wrapperProps = React.useMemo(() => ({
    onKeyDown: handleWrapperKeyDown,
  }), [handleWrapperKeyDown])

  /* Label */
  const labelProps = React.useMemo(() => ({
    htmlFor: id,
    id: 'label-' + id,
  }), [])

  /* Input */
  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true)
    if (!e.target.value) {
      setValueSelectedState('')
      setValueState('')
    }
    setValueState(e.target.value)
  }, [])

  const handleInputFocus = React.useCallback(() => {
    setIsOpen(true)
    setHighlightedKey('')
    setIsInputFocused(true)
    if (onFocus) onFocus()
  }, [])

  const handleInputBlur = React.useCallback(() => {
    setIsOpen(false)
    if (fillOut) {
      setValueState(valueSelectedState)
    }
    setIsInputFocused(false)
    if (onBlur) onBlur()
  }, [valueSelectedState])

  const inputProps = React.useMemo<React.HTMLAttributes<HTMLInputElement>>(() => ({
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    value: valueState,
    ref: inputRef,
    placeholder,
    id: id,
    autoComplete: 'off',
    role: 'combobox',
    'aria-autocomplete': 'list',
    'aria-controls': 'listbox-' + id,
    'aria-activedescendant': 'option-' + highlightedKey,
    'aria-expanded': isOpen,
    'aria-haspopup': 'listbox',
    'aria-owns': 'listbox-' + id,
  }), [valueState, inputRef, handleInputBlur, highlightedKey])

  /* Clear Button */
  const handleClearButtonClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()

    if (isInputFocused) {
      setIsOpen(true)
    }
    if (onClear) onClear()

    setValueState('')
    setValueSelectedState('')
  }, [isInputFocused])

  const clearButtonProps = React.useMemo(() => ({
    tabIndex: -1,
    onMouseDown: (e: React.MouseEvent) => handleClearButtonClick(e),
    'aria-label': 'clear',
  }), [handleClearButtonClick])

  /* ListOptions props */
  const listOptionsProps = React.useMemo(() => ({
    'role': 'listbox',
    'id': 'listbox-' + id,
    'aria-labelledby': 'label-' + id,
  }), [])

  /* OptionProps */
  const handleOptionMouseMove = React.useCallback((label: string) => {
    setHighlightedKey(label)
  }, [])

  const handleOptionClick = React.useCallback((e: React.MouseEvent, label: string) => {
    e.preventDefault()

    setValueState(label)
    setValueSelectedState(label)
    setIsOpen(false)
    if (onSelect) onSelect(label, getCollection(label))
  }, [])

  const getOptionProps = React.useCallback((label: string) => ({
    onMouseMove: () => handleOptionMouseMove(label),
    onMouseDown: (e: React.MouseEvent) => handleOptionClick(e, label),
    'role': 'option',
    'aria-selected': label === valueState,
    'id': 'option-' + label,
  }), [valueState])

  return {
    wrapperProps,
    labelProps,
    inputProps,
    listOptionsProps,
    getOptionProps,
    clearButtonProps,
    ...state,
  }
}
