import { forwardRef } from 'react'
import { IconButtonProps, useIconButton } from './useIconButton'
import styles from './styles/IconButton.module.css'
import Spinn from '../../Spinn/src'

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    Element,
    getProps,
    children,
    isLoading,
    size,
    spinner = <Spinn size={size} />,
    domRef,
  } = useIconButton({ ...props, ref })

  return (
    <Element {...getProps()} ref={domRef}>
      { isLoading
        ? (
            <>
              <span className={styles['loader']} style={{ position: 'absolute' }}>
                { spinner }
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

IconButton.displayName = 'simplexui.iconButton'

export default IconButton
