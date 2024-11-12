import { createContext } from 'core'
import { AccordionContext } from './useAccordion'

export const [AccordionProvider, useAccordionContext] = createContext<AccordionContext>({
  strict: true,
  errorMessage: 'useContext: `context` is not defined. It seems you forgot to include Accordion Item component inside Accordion',
  name: 'AccordionContext',
})
