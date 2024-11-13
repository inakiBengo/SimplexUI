import { Key } from 'react-aria'
import { useControllState } from '../useControllState/useControllState'
import React from 'react'

export interface AccordionState {
  readonly activeValues: Set<Key>
  readonly isDisabled: boolean
  toToggle: (id: Key) => void
  isActive: (id: Key) => boolean
  generateId: () => string
}

export interface AccordionProps {
  active?: Key[]
  readonly defaultActive?: Key[]
  readonly disabled?: boolean
  readonly multiple?: boolean
  onChange?: (keys: Set<Key>) => {}
}

export default function useAccordion(props: AccordionProps) {
  let globalId = 0
  const {
    active,
    defaultActive,
    onChange,
    disabled = false,
    multiple = false,
  } = props

  const [activeState, setActiveState] = useControllState(
    active ? new Set(active) : undefined,
    defaultActive ? new Set(defaultActive) : new Set(),
    onChange,
    'useAccordion',
  )

  const toToggle = (key: Key) => {
    const updateActives = new Set(activeState)

    if (activeState.has(key)) {
      updateActives.delete(key)
    } else {
      if (!multiple) updateActives.clear()
      updateActives.add(key)
    }
    setActiveState(updateActives)
  }

  const isActive = (key: Key) => activeState.has(key)

  const generateId = () => {
    globalId += 1
    return 'simplex-' + globalId
  }

  const state = {
    isDisabled: disabled,
    activeValues: activeState,
    toToggle,
    isActive,
    generateId,
  }

  return {
    state,
  }
}
