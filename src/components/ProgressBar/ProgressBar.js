import React from 'react'
import "./ProgressBar.css"

export default function ProgressBar(props) {
    return (
        <div className="progressBar" style={{display: props.category === 'Capital Raise' ? 'block' : 'none'}}>
            <div style={{width: props.progress+"%"}} className="progressBarPercent"/>
        </div>
    )
}
