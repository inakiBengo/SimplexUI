import React, { AriaAttributes, AriaRole, CSSProperties } from 'react'

// type Children<T> = { children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[] | ((item: T) => ReactElement<HTMLElement>) }
type Key = string | number
interface DOMAttributes<T = Element> extends AriaAttributes, React.DOMAttributes<T> {
  id?: string
  role?: AriaRole
  tabIndex?: number
  style?: CSSProperties
  className?: string
}

export interface AccordionState {
  accordionProps: DOMAttributes
  state: {
    expanded: Iterable<Key>
    disabled: Iterable<Key>
    toggleExpanded: (id: string) => void
    toggleDisabled: (id: string) => void
  }
}

export interface AccordionProps {
  defaultExpanded: Set<Key>
  expanded?: Set<Key>
  disabled?: Set<Key>
  selectType: 'single' | 'multiple'
  onChange?: (keys: Set<Key>) => {}
}

export default function useAccordionState(props: AccordionProps): AccordionState {
  const {
    expanded,
    defaultExpanded = new Set(),
    disabled = new Set(),
    onChange,
    selectType = 'single',
  } = props

  const [expandedState, setExpandedState] = React.useState(expanded || defaultExpanded)
  const [disabledState, setDisabledState] = React.useState(disabled)

  const handleChange = React.useCallback(() => {
    if (onChange) {
      onChange(expandedState)
    }
  }, [expandedState])

  const toggleExpanded = React.useCallback((id: string) => {
    if (disabledState.has(id)) return
    const newSet = new Set(expandedState)

    if (expanded?.has(id)) {
      newSet.delete(id)
    }
    else {
      if (selectType === 'single') {
        newSet.clear()
        newSet.add(id)
      }
      else {
        newSet.add(id)
      }
    }
    setExpandedState(newSet)
  }, [expandedState])

  const toggleDisabled = React.useCallback((id: string) => {
    const newSet = new Set(disabledState)
    disabledState.has(id)
      ? newSet.delete(id)
      : newSet.add(id)

    setDisabledState(newSet)
  }, [disabledState])

  return {
    accordionProps: {
      onChange: handleChange,
    },
    state: {
      expanded: expandedState,
      disabled: disabledState,
      toggleExpanded,
      toggleDisabled,
    },
  }
}
