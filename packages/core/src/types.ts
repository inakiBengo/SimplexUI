export type As = React.ElementType

type DataAttributes = Record<`data-${string}`, string>

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>

export type HTMLSimplexuiProps<T extends As = 'div', OmitKeys extends keyof PropsOf<T> = never > = Omit<
  PropsOf<T>,
  'ref' | 'size' | 'color' | 'defaultChecked' | OmitKeys
> & {
  as?: As
} & DataAttributes

export namespace GenericStyles {
  export type Size = 'sm' | 'md' | 'lg'
  export type Color = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'success'
  export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full'
  export type Variant = 'solid' | 'outline' | 'light'

  export type AllProps = {
    size?: Size
    color?: Color
    radius?: Radius
    variant?: Variant
  }
}

export type ReactRef<T extends HTMLElement | null > = React.RefObject<T> | React.MutableRefObject<T> | React.Ref<T>
export type RefObject<T> = { current: T }

export type Key = string
