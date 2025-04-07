import { forwardRef } from 'react'

const Spinner = forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <span {...props} ref={ref} className='sx-loader'>
      <i></i>
      <i></i>
    </span>
  )
})

Spinner.displayName = 'simplexui.spinner'

export default Spinner
