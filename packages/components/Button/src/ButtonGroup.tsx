import { forwardRef } from 'react'
import { useButtonGroup, PorpsButtonGroup } from './useButtonGroup'
import { ButtonGroupProvider } from './ButtonGroupContext'

const ButtonGroup = forwardRef<HTMLDivElement, PorpsButtonGroup>((props, ref) => {
  const {
    Element,
    domRef,
    children,
    getProps,
    context,
  } = useButtonGroup({ ...props, ref })

  return (
    <ButtonGroupProvider value={context}>
      <Element ref={domRef} {...getProps()}>
        { children }
      </Element>
    </ButtonGroupProvider>
  )
})

ButtonGroup.displayName = 'simplexui.ButtonGroup'

export default ButtonGroup
