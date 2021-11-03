import React, {ComponentProps, useState} from 'react';

import {Story, Meta} from '@storybook/react';
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
} as Meta

const Template: Story<ComponentProps<typeof Accordion>> = (args) => <Accordion {...args} />

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    title: 'Menu',
    collapsed: true,
};

export const NotCollapsedAccordion = Template.bind({});
NotCollapsedAccordion.args = {
    title: 'Menu',
    collapsed: false,
};


export const ChangingAccordionCollapse = () => {
    const [collapsed, SetCollapsed] = useState<boolean>(false)
    return <Accordion onClick={SetCollapsed} collapsed={collapsed} title={'Menu'}/>
}

