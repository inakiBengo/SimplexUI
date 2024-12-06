import { PressHookProps, FocusProps as AriaFocusProps } from 'react-aria'

export type PressProps = Omit<PressHookProps, 'ref' | 'isDisabled' | 'isPressed' | 'preventFocusOnPress' | 'allowTextSelectionOnPress'>
export type FocusProps = Omit<AriaFocusProps, 'isDisabled'>

export type ReactRef<T extends HTMLElement | null> = React.RefObject<T> | React.MutableRefObject<T>
export type Key = string
