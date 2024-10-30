import { forwardRef } from 'react'
import { SpinProps, useSpinn } from './useSpinn'

const Spinn = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    domRef,
    children,
    getProps,
  } = useSpinn({ ...props, ref })

  return (
    <div ref={domRef} {...getProps()}>
      <div>
        <i></i>
        <i></i>
      </div>
      { children }
    </div>
  )
})

Spinn.displayName = 'simplexui.Spinn'

export default Spinn
