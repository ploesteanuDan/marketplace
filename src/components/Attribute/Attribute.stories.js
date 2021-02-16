import React, { Children } from 'react'
import Attribute from './Attribute'
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
    title: 'Attribute',
    component: Attribute,
    decorators: [withKnobs]

}

export const PrimaryAttribute = () => <Attribute variant='primary'>Attribute</Attribute>

