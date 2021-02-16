import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import Title from '../Title/Title'
import CategoryBar from '../CategoryBar/CategoryBar'
import ProgressBar from '../ProgressBar/ProgressBar'
import RaiseAmount from '../RaiseAmount/RaiseAmount'
import Attribute from "../Attribute/Attribute"
import BottomTag from "../BottomTag/BottomTag"
import "./Card.css"

export default function Card(props) {

    const [color, setColor] = useState('#959595')
    const [secondaryBadgeColor, setSecondaryBadgeColor] = useState('#959595')
    function getColor(){
        if(!props.categoryColor){
            if(props.category==='Capital Raise')
                setColor( '#4caf50')
            else if(props.category==='Secondary Sale')
                setColor( '#aa439d')
            else if(props.category==='Fund')
                setColor( '#559ecc')
            else if(props.category==='ASX: SCU')
                setColor( '#c0651c')
            else setColor( '#959595')
        }
        else setColor( props.categoryColor)
    }

    function getSecondaryBadgeColor(){
        if(props.category==='ASX: SCU'){
            if(props.secondaryBadge === 'EDITOR' || props.secondaryBadge === 'VIEWER')
                setSecondaryBadgeColor('#959595')
            else if(props.secondaryBadge === 'REVOKED')
                setSecondaryBadgeColor('#c73939')
            else if(props.secondaryBadge === 'REQUESTED')
                setSecondaryBadgeColor('#e89711')   
        }
    }

    function getStacks(){
        if(props.category === 'ASX: SCU' && props.secondaryBadge ==='VIEWER'){
            if(props.fourthBadge === 2)
                return(
                    <div>
                        <div className="card" style={{position:'absolute', zIndex:-1,top: 0, transform: `translate(${1+"vw"}, ${3+'vw'})`}}></div>
                    </div>
                )
            else if(props.fourthBadge > 2)
                return(
                    <div>
                        <div className="card" style={{position:'absolute', zIndex:-1,top: 0, transform: `translate(${1+"vw"}, ${3+'vw'})`}}></div>
                        <div className="card" style={{position:'absolute', zIndex:-2,top: 0, transform: `translate(${2+"vw"}, ${4+'vw'})`}}></div>
                    </div>
                )
        }
        
    }

    useEffect(() => {
        getColor()
        getSecondaryBadgeColor()
    }, [props])

    return (
            <div>
                <div className='card'> 
                    <Header {...props} color={color} badge={props.badge} secondaryBadgeColor={secondaryBadgeColor}/>
                    <Title title={props.title}/>
                    <CategoryBar category={props.category} color={color}/>
                    <ProgressBar progress={props.progress} category={props.category}/>
                    <RaiseAmount raiseAmount={props.raiseAmount} raiseCurrency={props.raiseCurrency} category={props.category}/>
                    <div className='bottomHalfContainer'>
                        <div className="attributeContainer">
                            <Attribute icon="list" atr={props.atr1}/>
                            <Attribute icon="cube" atr={props.atr2}/>
                            <Attribute icon="cubes" atr={props.atr3}/>
                        </div>
                        <div className="tagContainer">
                            <BottomTag tag={props.tag1}/>
                            <BottomTag tag={props.raiseCurrency}/>
                            <BottomTag tag={props.tag3}/>
                        </div>
                    </div>
                </div>
                {getStacks()}
            </div>
            
    )
}
