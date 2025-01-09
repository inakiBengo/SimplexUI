import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarGroup } from '../../index';
const config = {
    component: Avatar,
    title: 'Avatar',
};
export default config;
export const Default = {
    args: {
        src: 'https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg',
        badge: {
            value: '4',
            color: 'primary',
        },
        size: 'lg',
        radius: 'full',
    },
};
const pepe = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
export const Group = {
    render: () => {
        return (_jsxs(AvatarGroup, { size: 'lg', disabled: true, children: [pepe.map((value, index) => {
                    if (index > 2)
                        return;
                    return (_jsx(Avatar, { fallback: value }, index));
                }), _jsx(Avatar, { fallback: '+' + pepe.length })] }));
    },
};
//# sourceMappingURL=Avatar.stories.js.map