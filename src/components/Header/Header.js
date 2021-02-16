import React from 'react'
import Badge from '../Badge/Badge'
import "./Header.css"

export default function Header(props) {
    return (
        <div>
            <div className='header'>
                <img src={props.logo} style={{display: props.logo? "block":"none"}} className="bg"/>
                <div className="categoryColor" style={{backgroundColor: props.color}}/>
                <img src={props.logo} style={{display: props.logo? "block":"none"}} className="logo"/>
                <Badge badge={props.badge} color="#c73939" pos='left' display={props.badge && props.category !=='ASX: SCU' ? 'block':'none'} width='14%'/>
                <Badge badge={props.secondaryBadge} color={props.secondaryBadgeColor} pos='right' display={props.category === 'ASX: SCU' ? 'block':'none'} width='20%'/>
                <Badge badge={props.tertiaryBadge} color="#959595" icon="user" display={props.category === 'ASX: SCU' && props.secondaryBadge ==='EDITOR' ? 'block':'none'} pos='left' width='12%'/>
                <Badge badge={props.fourthBadge} color="#959595" icon="layer-group" display={props.category === 'ASX: SCU' && props.secondaryBadge ==='VIEWER' ? 'block':'none'} pos='top' width='20%' />
                <Badge icon="times" display={props.category === 'ASX: SCU' && props.secondaryBadge ==='REVOKED' ? 'block':'none'} pos='top' width='20%'/>
            </div>
        </div>
    )
}
