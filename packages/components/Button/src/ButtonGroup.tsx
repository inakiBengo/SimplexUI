import { forwardRef } from 'react'
import { useButtonGroup, useButtonGroupProps } from './useButtonGroup'
import { ButtonProvider } from './button_context'

const ButtonGroup = forwardRef<HTMLDivElement, useButtonGroupProps>((props, ref) => {
  const {
    children,
    getRootProps,
    context,
  } = useButtonGroup({ ...props, ref })

  return (
    <ButtonProvider value={context}>
      <div {...getRootProps()}>
        { children }
      </div>
    </ButtonProvider>
  )
})

ButtonGroup.displayName = 'simplex.ButtonGroup'

export default ButtonGroup
