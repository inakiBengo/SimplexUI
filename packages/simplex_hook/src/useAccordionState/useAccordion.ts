import { useControllState } from '../useControllState/useControllState'

type Key = string | number

export interface AccordionState {
  readonly values: Set<Key>
  readonly isDisabled: boolean
  toggleValue: (id: Key) => void
  isActive: (id: Key) => boolean
  setExpandedValue: (v: Set<Key>) => void,
}

export interface AccordionProps {
  active?: Key[]
  readonly defaultActive?: Key[]
  readonly disabled?: boolean
  readonly multiple?: boolean,
  onChange?: (keys: Set<Key>) => {}
}

export default function useAccordion(props: AccordionProps) {
  const {
    active,
    defaultActive = [],
    onChange,
    disabled = false,
    multiple = false,
  } = props

  const [expandedValues, setExpandedValue] = useControllState<Set<Key>>(new Set(active), new Set(defaultActive), onChange, 'Accordion')

  const state: AccordionState = {
    values: expandedValues,
    isDisabled: disabled,
    setExpandedValue,
    toggleValue: (id) => {
      const newSet = new Set(expandedValues)
      if (expandedValues.has(id)) {
        newSet.delete(id)
      } else {
        if (!multiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      setExpandedValue(newSet)
    },
    isActive: (id) => {
      return expandedValues.has(id)
    },
  }

  return {
    state,
    props: {
    }
  }
}
