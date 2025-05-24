import React from "react"
import "../styles/Button.css"


function Button ({label, onClick}){
    return(
        <button className="take-test-button" onClick={onClick}>
            <span>{label}</span>
        </button>
    )
}

export default Button;