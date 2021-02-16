import React from 'react'
import CategeoryBar from './CategoryBar'
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
    title: 'Card Category',
    component: CategeoryBar,
    decorators: [withKnobs]

}

export const PrimaryCategoryBar = () => <CategeoryBar variant='primary'>Category</CategeoryBar>

export const Knobs = () => {
   return <CategeoryBar>
        {text('Label', 'Category Label')}
    </CategeoryBar>
}