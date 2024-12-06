import { useControllState } from '../useControllState/useControllState'
import React from 'react'
import type { Key } from '../types'
import type { RefAccordionItem } from './useAccordionItem'

export interface AccordionState {
  toToggle: (key: Key) => void
  generateKey: () => Key
  register: (key: Key, ref: RefAccordionItem) => void
  setFocus: (key: Key | null) => void
  readonly isDisabled: boolean
  readonly isActive: (key: Key) => boolean
  readonly active: Set<Key>
  readonly keys: Key[]
  readonly focusedKey: Key | null
}

export interface AccordionProps {
  active?: Set<Key>
  readonly defaultActive?: Key[]
  readonly disabled?: boolean
  readonly multiple?: boolean
  onChange?: (keys: Set<Key>) => void
}

export default function useAccordion(props: AccordionProps) {
  const {
    active,
    defaultActive,
    onChange,
    multiple,
    disabled = false,
    ...otherProps
  } = props

  // ** Data center ** //
  const collection = React.useRef<Map<Key, RefAccordionItem>>(new Map())
  const keyList = React.useRef<Key[]>([])
  const [focusedKey, setFocusedKey] = React.useState<null | Key>(null)
  const [activeState, setActiveState] = useControllState(
    active ? new Set(active) : undefined,
    defaultActive ? new Set(defaultActive) : new Set(),
    onChange,
    'useAccordion',
  )

  // ** Collection control ** //
  let id = React.useRef(0).current
  const generateKey = React.useCallback(() => {
    id += 1
    return 'simplex-' + id
  }, [])

  const register = React.useCallback((key: Key, ref: RefAccordionItem) => {
    if (collection.current.has(key)) return
    collection.current.set(key, ref)
    keyList.current = Array.from(collection.current.keys())
  }, [])

  const nextKey = React.useCallback((key: Key) => {
    const currentIndex = keyList.current.indexOf(key)
    if (currentIndex + 1 === keyList.current.length) return null
    return keyList.current[(currentIndex + 1) % collection.current.size]
  }, [])

  const prevKey = React.useCallback((key: Key) => {
    const currentIndex = keyList.current.indexOf(key)
    if (currentIndex === 0) return null
    return keyList.current[(currentIndex - 1 + collection.current.size) % collection.current.size]
  }, [])

  // ** Activation control ** //
  const toToggle = React.useCallback((key: Key) => {
    const updateState = new Set(activeState)

    if (activeState.has(key)) {
      updateState.delete(key)
    } else {
      if (!multiple) updateState.clear()
      updateState.add(key)
    }
    setActiveState(updateState)
  }, [activeState, multiple, setActiveState])

  const isActive = React.useCallback((key: Key) => activeState.has(key), [activeState])

  // ** Focus control ** //
  const setFocus = React.useCallback((key: Key | null, ref?: RefAccordionItem) => {
    setFocusedKey(key)
    if (!ref) return
    ref.current?.focus()
  }, [])

  const state: AccordionState = {
    isActive,
    toToggle,
    generateKey,
    isDisabled: disabled,
    active: activeState,
    keys: keyList.current,
    register,
    setFocus,
    focusedKey,
  }

  const onKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    e.stopPropagation()
    if (!focusedKey) return

    switch (e.key) {
      case ('ArrowDown'): {
        const key = nextKey(focusedKey)
        if (!key) return
        setFocus(key, collection.current.get(key))
        break
      }
      case ('ArrowUp'): {
        const key = prevKey(focusedKey)
        if (!key) return
        setFocus(key, collection.current.get(key))
        break
      }
    }
  }, [focusedKey])

  const baseProps = {
    onKeyDown,
    ...otherProps,
  }

  return {
    state,
    baseProps,
  }
}
