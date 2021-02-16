import React from 'react'
import "./RaiseAmount.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faMoneyCheckAlt)

export default function RaiseAmount(props) {
    function getSign(){
        return props.raiseCurrency === "EUR" ? "€" : props.raiseCurrency ==='USD' || props.raiseCurrency ==='AUD' ? '$' : <FontAwesomeIcon icon={faMoneyCheckAlt}/> 
    }
    return (
        <div className="raiseAmount" style={{display: props.category === 'Capital Raise' ? 'block' : 'none'}}>
           {getSign()} {props.raiseAmount} {props.raiseCurrency}
        </div>
    )
}
