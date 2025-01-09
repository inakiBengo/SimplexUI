import { createContext } from 'core';
export const [AccordionProvider, useAccordionContext] = createContext({
    strict: true,
    errorMessage: 'useContext: `context` is not defined. It seems you forgot to include Accordion Item component inside Accordion',
    name: 'AccordionContext',
});
//# sourceMappingURL=accordion_context.js.map