import React from 'react'
import Card2 from "./Card2"
import {withKnobs, text} from '@storybook/addon-knobs'
import {PrimaryTitle} from '../Title/Title.stories'
import { PrimaryHeader } from '../Header/Header.stories'
export default {
    title: 'Card2',
    component: Card2,
    decorators: [withKnobs]
}

export const PrimaryCard2 = () => (
    <>
        <PrimaryTitle title='titlu2'/>
    </>
)

  

export const Knobs = () => {
    const title = text('Title', 'titlu')
    return <Card2>
        <PrimaryTitle title={title}/>
        <PrimaryHeader/>
    </Card2>
}