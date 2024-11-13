import { useEffect } from 'react'
import { PressEvent } from 'react-aria'
import { AccordionProps, useAccordion, useAccordionItem } from 'simplex_hook'

function Testing(props: AccordionProps) {
  const { state } = useAccordion(props)
  const itemObject = {
    onPress: (e: PressEvent) => console.log(e),
  }
  const { props: pressProps, isActive, activeValues } = useAccordionItem(itemObject, state)

  useEffect(() => {
    console.log(activeValues)
  }, [activeValues])

  return (
    <>
      <button {...pressProps}>
        button
      </button>
      { isActive ? 'true' : 'false' }
    </>
  )
}

export default Testing
