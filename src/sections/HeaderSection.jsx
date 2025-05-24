import React from "react"
import Button from "../components/Button"
import "../styles/HeaderSection.css"


function HeaderSection({onTakeTestClick}){
    return(
        <section className = "header-section">
            <h1>Welcome to the 9C Strength Test</h1>
            <h2>Are you strong enough to climb 9C?</h2>
            <Button label="Take the Test" onClick = {onTakeTestClick}/>
        </section>
    )
}

export default HeaderSection;
