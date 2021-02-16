import React from 'react'
import "./Attribute.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCube, faCubes, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCube, faCubes, faList)

export default function Attribute(props) {
    return (
        <div className="attribute">
            <FontAwesomeIcon className='attributeIcon' icon={props.icon} />
            <text className="attributeText">{props.atr}</text>
        </div>
    )
}
