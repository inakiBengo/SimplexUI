import { forwardRef } from 'react'
import { useButton, useButtonProps } from './useButton'
import { Spinner } from '../../index'

const Button = forwardRef<HTMLButtonElement, useButtonProps>((props, ref) => {
  const {
    Element,
    children,
    icon,
    iconEnd,
    loading,
    getRootProps,
    contetnProps,
  } = useButton({ ...props, ref })

  const Content = () => {
    return (
      <span {...contetnProps()}>
        {
          loading
            ? (
                <Spinner />
              )
            : (typeof icon === 'function' ? icon() : icon)
        }
      </span>
    )
  }

  return (
    <Element {...getRootProps()}>
      {
        loading && !icon
          ? <Content />
          : null
      }
      {
        icon && !iconEnd
          ? <Content />
          : null
      }
      <span>{ children }</span>
      {
        icon && iconEnd
          ? <Content />
          : null
      }

    </Element>
  )
})

Button.displayName = 'simplexui.button'

export default Button
