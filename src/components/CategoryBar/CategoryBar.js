import React from 'react'
import "./CategoryBar.css"

export default function CategeoryBar(props) {

    return (
            <div className='category' style={{backgroundColor: props.color}}> 
                {props.category}
            </div>
    )
}
