import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
} as Meta

const Template: Story<ComponentProps<typeof OnOff>> = (args) => <OnOff {...args} />
export const FirstStory = Template.bind({});
FirstStory.args = {
    /*👇 The args you need here will depend on your component */
    on: true,
};
