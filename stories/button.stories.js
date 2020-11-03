import { action } from '@storybook/addon-actions'

import { Button } from '../src'
import { withSlot } from './helpers'

export default {
    title: 'Button',
    argTypes: {
        content: 'text',
    },
}

const Template = ({ ...args }) => ({
    Component: withSlot,
    props: {
        ...args,
        component: Button,
    },
    on: {
        click: action('on:click was triggered'),
    },
});

export const Default = Template.bind({})
Default.args = {
    content: 'Click me',
}
