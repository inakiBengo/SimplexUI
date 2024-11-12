import { useAccordion, useAccordionItem, type AccordionProps } from 'simplex_hook'

function Testing(AccordionProps: AccordionProps) {
  const { state, props } = useAccordion(AccordionProps)
  const { state: stateItem } = useAccordionItem(props, state)
  const { buttonProps } = useAccordionItem(props, state)

  function values() {
    console.log(state.values)
  }
  console.log(stateItem)

  return (
    <>
      <button onClick={() => values()}>value</button>
      <button onClick={() => stateItem.toggleValue()}>toggle 1</button>
      <button {...buttonProps}>toogle 2</button>
    </>
  )
}

export default Testing
