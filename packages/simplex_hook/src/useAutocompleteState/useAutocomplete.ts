import React from 'react'
import { useControllState } from '../useControllState/useControllState'
import { createCollectionManager, RefObject, useId } from 'core'
import { AutocompleteProps, AutocompleteState } from './types'

const defaultGetLabel = (option: string | number | { label?: string }) => (
  typeof option === 'string' || typeof option === 'number' ? option : option.label
)

export default function useAutocomplete<Value extends object | string | number>(
  props: AutocompleteProps<Value>,
  inputRef: RefObject<HTMLInputElement | null>,
  scrollRef: RefObject<HTMLUListElement | null>,
) {
  const {
    value,
    defaultValue,
    onChange,
    open,
    onOpenChange,
    options = [],
    filterOptions,
    getLabel = defaultGetLabel,
    fillOut = false,
  } = props

  const id = useId()
  const { getKey, filterByKey } = createCollectionManager(options, {
    getKey: getLabel,
    filterByKey: filterOptions,
    keyName: 'Label',
    componentName: 'Autocomplete',
    loop: true,
  })
  const [highlightedIndex, setHighlightedIndex] = React.useState<number>(-1)
  const [confirmedValue, setConfirmedValue] = React.useState('')
  const [isPositionUp, setIsPositionUp] = React.useState(false)
  const [isOpen, setIsOpen] = useControllState<boolean>(
    open,
    false,
    onOpenChange,
    'useAutocomplete open state',
  )
  const [inputValue, setInputValue] = useControllState<string | number>(
    value,
    defaultValue || '',
    e => onChange?.(e),
    'useAutocomplete value state',
  )
  const filteredOptions = filterByKey(inputValue)

  React.useEffect(() => {
    const handlePositionPopup = () => {
      const popupHeight = scrollRef.current?.getBoundingClientRect().height || 0
      const inputBottom = inputRef.current?.getBoundingClientRect().bottom || 0
      const windowsHeight = window.innerHeight
      setIsPositionUp((windowsHeight - inputBottom - popupHeight) < 20)
    }

    if (isOpen) {
      handlePositionPopup()
      window.addEventListener('resize', handlePositionPopup)
      window.addEventListener('scroll', handlePositionPopup)
    } else {
      setIsPositionUp(false)
    }
    return () => {
      window.removeEventListener('resize', handlePositionPopup)
      window.removeEventListener('scroll', handlePositionPopup)
    }
  }, [isOpen, scrollRef, inputRef])

  const state = React.useMemo<AutocompleteState<Value>>(() => ({
    getLabel,
    isOpen,
    filteredOptions: isOpen ? filteredOptions : [],
    highlightedIndex,
    isPopupUp: isPositionUp,
  }), [inputValue, options, isOpen, highlightedIndex, isPositionUp])

  /* Wrapper */
  const handleWrapperKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (!(e.target === inputRef.current)) return

    switch (e.key) {
      case ('ArrowUp'): {
        e.preventDefault()
        setIsOpen(true)
        const prevIndex = highlightedIndex - 1 < 0
          ? filteredOptions.length - 1
          : highlightedIndex - 1

        setHighlightedIndex(prevIndex)
        scrollRef.current?.children[prevIndex]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case ('ArrowDown'): {
        e.preventDefault()
        setIsOpen(true)
        const nextIndex = highlightedIndex + 1 >= filteredOptions?.length
          ? 0
          : highlightedIndex + 1

        setHighlightedIndex(nextIndex)
        scrollRef.current?.children[nextIndex]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case ('Escape'): {
        e.preventDefault()
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
      }
      case ('Enter'): {
        e.preventDefault()
        setIsOpen(false)
        if (highlightedIndex > -1) {
          const label = filteredOptions[highlightedIndex] ? getKey(filteredOptions[highlightedIndex]) : ''
          setConfirmedValue(label)
          setInputValue(label)
        }
        break
      }
    }
  }, [highlightedIndex, inputRef, filteredOptions])

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
      setConfirmedValue('')
      setInputValue('')
    }
    setInputValue(e.target.value)
  }, [])

  const handleInputFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(true)
    setHighlightedIndex(-1)
    props.onFocus?.(e)
  }, [])

  const handleInputBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(false)

    if (fillOut) {
      setInputValue(confirmedValue)
    }
    props.onBlur?.(e)
  }, [confirmedValue, fillOut])

  const inputProps = React.useMemo<React.HTMLAttributes<HTMLInputElement>>(() => ({
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    value: inputValue,
    ref: inputRef,
    autoComplete: 'off',
    role: 'combobox',
    'aria-autocomplete': 'list',
    'aria-controls': 'listbox-' + id,
    'aria-activedescendant': highlightedIndex >= 0 ? 'option-' + highlightedIndex : undefined,
    'aria-expanded': isOpen,
    'aria-haspopup': 'listbox',
    'aria-owns': 'listbox-' + id,
  }), [inputValue, inputRef, handleInputBlur, highlightedIndex])

  /* Clear Button */
  const handleClearButtonClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()

    setIsOpen(true)
    props.onClear?.()

    setInputValue('')
    setConfirmedValue('')
  }, [])

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
    'tabIndex': -1,
    ref: scrollRef,
  }), [])

  /* OptionProps */
  const handleOptionMouseMove = React.useCallback((index: number) => {
    setHighlightedIndex(index)
  }, [])

  const handleOptionClick = React.useCallback((e: React.MouseEvent, index: number) => {
    e.preventDefault()
    const value = filteredOptions[index]
    const label = value ? getKey(value) : ''

    setInputValue(label)
    setConfirmedValue(label)
    props.onSelectOption?.(label, value)
    setIsOpen(false)
  }, [filteredOptions])

  const getOptionProps = React.useCallback((index: number) => ({
    onMouseMove: () => handleOptionMouseMove(index),
    onMouseDown: (e: React.MouseEvent) => handleOptionClick(e, index),
    'role': 'option',
    'aria-selected': index === highlightedIndex,
    'id': highlightedIndex >= 0 ? 'option-' + highlightedIndex : undefined,
  }), [inputValue])

  return {
    wrapperProps,
    inputProps,
    listOptionsProps,
    getOptionProps,
    clearButtonProps,
    ...state,
  }
}
