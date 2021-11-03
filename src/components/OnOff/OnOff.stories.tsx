import React, {ComponentProps, useState} from 'react';

import {Story, Meta} from '@storybook/react';
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
} as Meta

const Template: Story<ComponentProps<typeof OnOff>> = (args) => <OnOff {...args} />
export const On = Template.bind({});
On.args = {
    on: true,
};

export const Of = Template.bind({});
Of.args = {
    on: false,
};


export const ModeChanging = () => {
    const [on, SetOn] = useState(true)
    return <OnOff onClick={SetOn} on={on}/>
}
