const MegaMenuProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Defines the orientation, valid values are horizontal and vertical.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
    }
];

const MegaMenuSlots = [
    {
        name: 'start',
        description: 'Custom content before the content'
    },
    {
        name: 'end',
        description: 'Custom content after the content'
    },
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    megamenu: {
        name: 'MegaMenu',
        description: 'MegaMenu is navigation component that displays submenus together.',
        props: MegaMenuProps,
        slots: MegaMenuSlots
    }
};
