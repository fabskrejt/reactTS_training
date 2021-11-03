import React, {ComponentProps, useState} from 'react';

import {Story, Meta} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
} as Meta

const Template: Story<ComponentProps<typeof Rating>> = (args) => <Rating {...args} />

export const Rating1= Template.bind({});
Rating1.args = {
    value: 1,
};

export const Rating2= Template.bind({});
Rating2.args = {
    value: 2,
};
export const Rating3= Template.bind({});
Rating3.args = {
    value: 3,
};

export const Rating4= Template.bind({});
Rating4.args = {
    value: 4,
};

export const Rating5= Template.bind({});
Rating5.args = {
    value: 5,
};



/*
export const ModeChanging = () => {
    const [on, SetOn] = useState(true)
    return <OnOff onClick={SetOn} on={on}/>
}
*/
