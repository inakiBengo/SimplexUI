import { GenericStyles, HTMLSimplexuiProps, ReactRef } from 'core';
import './styles/AvatarGroup.css';
export type AvatarGroupRef = HTMLDivElement | null;
export type AvatarContext = {
    size?: GenericStyles.Size;
    radius?: GenericStyles.Radius;
    disabled?: boolean;
};
export interface AvatarGroupProps extends HTMLSimplexuiProps<'div'>, AvatarContext {
    ref?: ReactRef<HTMLDivElement>;
    grid?: boolean;
}
export declare const useAvatarGroup: (props: AvatarGroupProps) => {
    Element: import("packages/core/src/types").As;
    children: import("react").ReactNode;
    getBaseProps: () => {
        ref: import("react").RefObject<HTMLDivElement>;
        className: string;
    };
    AvatarProvider: import("react").Provider<AvatarContext | undefined>;
    context: {
        size: GenericStyles.Size;
        radius: GenericStyles.Radius | undefined;
        disabled: boolean | undefined;
    };
};
