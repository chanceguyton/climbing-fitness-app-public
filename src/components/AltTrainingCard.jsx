import React from "react";
import "../styles/TrainingPlanCard.css"

function AltTrainingCard(){
    return (
        <div className="plan-wrapper">
            <h2 className="training-plan-title">AI Training Plan</h2>
            <div className="training-plan-card">
                <div className="plan-text-scroll">
                    <p>Generating Training Plan...</p>
                </div>
            </div>
        </div>
    )
}

export default AltTrainingCard;