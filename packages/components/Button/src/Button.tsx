import { forwardRef } from 'react'
import { ButtonProps, useButton } from './useButton'
import styles from './styles/Button.module.css'
import Spinn from '../../Spinn/src'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    Element,
    children,
    size,
    spinner = <Spinn size={size} />,
    isLoading,
    domRef,
    getProps,
  } = useButton({ ...props, ref })

  return (
    <Element {...getProps()} ref={domRef}>
      { isLoading
        ? (
            <>
              <span className={styles['loader']} style={{ position: 'absolute' }}>
                { spinner }
                { isLoading }
              </span>
              <span style={{ visibility: 'hidden' }}>
                { children }
              </span>
            </>
          )
        : children }
    </Element>
  )
})

Button.displayName = 'simplexui.Button'

export default Button
