import React from 'react'
import "./Title.css"

export default function Title(props) {
    return (
        <div>
            <div className="title"> 
                {props.title}
            </div>
        </div>
    )
}
