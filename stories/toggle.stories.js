import { action } from '@storybook/addon-actions'

import { Toggle } from '../src'
import { withSlot } from './helpers'

export default {
    title: 'Toggle',
    argTypes: {
        content: 'text',
    },
}

const Template = ({ ...args }) => ({
    Component: withSlot,
    props: {
        ...args,
        component: Toggle,
    },
    on: {
        click: action('on:click was triggered'),
    },
});

export const Default = Template.bind({})
Default.args = {
    content: 'Toggle me',
    checked: false,
}

export const Primary = Template.bind({})
Primary.args = {
    content: 'Toggle me',
    checked: false,
    primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
    content: 'Toggle me',
    checked: false,
    secondary: true,
}
