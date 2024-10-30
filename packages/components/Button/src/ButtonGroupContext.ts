import { createContext } from '@simplexui/core'

import { contextType } from './useButtonGroup'

export const [ButtonGroupProvider, useButtonGroupContext] = createContext<contextType>({
  name: 'ButtonGroupContext',
  strict: false,
})
