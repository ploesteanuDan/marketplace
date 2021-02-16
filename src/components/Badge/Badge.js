import React, {useState} from 'react'
import "./Badge.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLayerGroup, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faUser, faLayerGroup, faTimes)

export default function Badge(props) {
    return (
        <div className="badge" style={{display: props.display, top: props.pos==='top' ? 0 : "11.5vw", left: props.pos === 'left' ? 0 : "80%", width: props.width, backgroundColor: props.color}}>
            <text className="badgeText">{props.badge} {props.icon ? <FontAwesomeIcon icon = {props.icon}/> : ""}</text>
        </div>
    )
}
