import { PressHookProps, FocusProps as AriaFocusProps } from 'react-aria'

export type PressProps = Omit<PressHookProps, 'ref' | 'isDisabled' | 'isPressed' | 'preventFocusOnPress' | 'allowTextSelectionOnPress'>
export type FocusProps = Omit<AriaFocusProps, 'isDisabled'>

export type Ref = React.RefObject<HTMLElement>
export type Key = string | number
