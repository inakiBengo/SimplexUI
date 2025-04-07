import { createContext } from 'core'
import { ButtonContextType } from './useButtonGroup'

export const [ButtonProvider, useButtonContext] = createContext<ButtonContextType>({
  strict: false,
  errorMessage: 'Error in the context of the buttonGroup component',
  name: 'ButtonGroupContext',
})
