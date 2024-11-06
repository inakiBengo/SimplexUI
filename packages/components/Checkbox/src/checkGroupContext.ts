import { createContext } from 'core'
import { ContextType } from './useCheckboxGroup'

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<ContextType>({
  name: 'checkGroupContext',
  strict: false,
})
