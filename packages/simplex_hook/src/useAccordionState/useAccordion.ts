import { Key } from 'react-aria'
import { useControllState } from '../useControllState/useControllState'

export interface AccordionState {
  readonly values: Set<Key>
  readonly isDisabled: boolean
  readonly isMultiple: boolean
  onToggle: (id: Key) => void
  isActive: (id: Key) => boolean
  setExpandedValue: (v: Set<Key>) => void
}

export interface AccordionProps {
  active?: Key[]
  readonly defaultActive?: Key[]
  readonly disabled?: boolean
  readonly multiple?: boolean
  onChange?: (keys: Set<Key>) => {}
}

export default function useAccordion(props: AccordionProps) {
  const {
    active,
    defaultActive,
    onChange,
    disabled = false,
    multiple = false,
  } = props

  const [expandedValues, setExpandedValue] = useControllState<Set<Key>>(
    active ? new Set(active) : undefined,
    defaultActive ? new Set(defaultActive) : new Set<Key>(),
    onChange,
    'Accordion',
  )

  const onToggle = (id: Key) => {
    const updateValue = new Set(expandedValues)

    if (expandedValues.has(id)) {
      updateValue.delete(id)
    } else {
      if (!multiple) updateValue.clear()
      updateValue.add(id)
    }

    setExpandedValue(updateValue)
  }

  const isActive = (id: Key) => expandedValues.has(id)

  const state: AccordionState = {
    values: expandedValues,
    isDisabled: disabled,
    isMultiple: multiple,
    setExpandedValue,
    onToggle,
    isActive,
  }

  return {
    state,
    props: {
    },
  }
}
