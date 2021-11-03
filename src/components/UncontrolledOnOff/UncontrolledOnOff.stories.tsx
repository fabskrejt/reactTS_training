import React, {ComponentProps, useState} from 'react';

import {Story, Meta} from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as Meta


export const ModeChanging = () => {

    return <UncontrolledOnOff />
}

