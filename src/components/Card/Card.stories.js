import React from 'react'
import Card from "./Card"
import {PrimaryHeader} from '../Header/Header.stories'
import {PrimaryTitle} from '../Title/Title.stories'
import {PrimaryCategoryBar} from '../CategoryBar/CategoryBar.stories'
import {PrimaryAttribute} from "../Attribute/Attribute.stories"
import {withKnobs, text, object, number, select, optionsKnob} from '@storybook/addon-knobs'

export default {
    title: 'Card',
    component: Card,
    decorators: [withKnobs]
}

// const Template = (args) => <Card {...args}/>

// export const CardTemplate = Template.bind({})
// CardTemplate.args= {
//     title: "Titlu",
//     category: "Categorie"
// }

// export const CardKnobs = () => {
//     return <Card props={text('title', 'titleee')}/>
// }



export const CardWithKnobs = () => {

    let props={}

    //------ HEADER & TITLE ------ HEADER & TITLE 
     props.title = text('Title', 'Engineering Unlimited Pty Ltd')
     props.logo = text('Logo', 'https://cdn.iconscout.com/icon/free/png-512/facebook-messenger-square-1868983-1583147.png')
     props.badge = text('Badge', "NEW")

    //------ SECONDARY BADGE ------ SECONDARY BADGE 
     props.secondaryBadgeLabel = 'Secondary Badge'
     props.secondaryBadgeOptions = {
        Editor: 'EDITOR',
        Requested: 'REQUESTED',
        Viewer: 'VIEWER',
        Revoked: 'REVOKED'
    }
     props.secondaryBadgeDefault = 'Editor'
     props.secondaryBadge = select(props.secondaryBadgeLabel, props.secondaryBadgeOptions, props.secondaryBadgeDefault)

    //------ OTHER BADGES -------
     props.tertiaryBadge = number('Tertiaty Badge', 137)
     props.fourthBadge = number('Fourth Badge', 3)

    //------ CATEGORY ------ CATEGORY 
     props.categoryColor = text('Category Color', '')
     props.categoryLabel = 'Category'
     props.categoryOptions = {
        CapitalRaise: 'Capital Raise',
        SecondarySale: 'Secondary Sale',
        Fund: 'Fund',
        ASXSCU: 'ASX: SCU',
    }
     props.categoryDefualt = 'Capital Raise'
     props.category = select(props.categoryLabel, props.categoryOptions, props.categoryDefualt)

    //------ CAPITAL RAISE ------ CAPITAL RAISE ------ CAPITAL RAISE 
     props.progress = number('Progress', 75)
     props.raiseAmount = number('Raise Amount', 90000)
     props.raiseCurrency = text('Raise Currency', "AUD")

    //------ ATTRIBUTES ------ ATTRIBUTES ------ ATTRIBUTES 
     props.atr1 = text('Attribute 1', 'Seed Round')
     props.atr2 = text('Attribute 2', 'Industrials')
     props.atr3 = text('Attribute 3', 'Construction and Engineering')

    //------ COUNTRY ------ COUNTRY ------ COUNTRY 
     props.tag3 = text('Tag 3', 'Australia')

    //------ TAG 1 ------ STATUS ------ TAG 1 ------ STATUS
     props.tag1Label = 'Status'
     props.tag1Options = {
        Open: 'Open',
        Closed: 'Closed',
        Finished: 'Finished',
    }
     props.tag1Defualt = 'Open'
     props.tag1 = select(props.tag1Label, props.tag1Options, props.tag1Defualt)

    

    return <Card {...props}/>
}



// return <Card title={title} category={category} logo={logo} categoryColor={categoryColor} progress={progress} badge={badge} raiseAmount={raiseAmount} raiseCurrency={raiseCurrency} atr1={atr1} atr2={atr2} atr3={atr3} tag1={tag1} tag3={tag3} secondaryBadge={secondaryBadge} tertiaryBadge={tertiaryBadge} fourthBadge={fourthBadge}/>
