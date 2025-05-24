import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/TrainingPlanCard.css"

function TrainingPlanCard({trainingPlan}){
    return (
        <div className="plan-wrapper">
            <h2 className="training-plan-title">AI Training Plan</h2>
            <div className="training-plan-card">
                <div className="plan-text-scroll">
                    <ReactMarkdown
                        components={{
                        h1: ({node, ...props}) => <h2 className="md-heading" {...props} />,
                        h2: ({node, ...props}) => <h3 className="md-heading" {...props} />,
                        p: ({node, ...props}) => <p className="md-paragraph" {...props} />,
                        ul: ({node, ...props}) => <ul className="md-list" {...props} />,
                        strong: ({node, ...props}) => <strong className="md-bold" {...props} />
                        }}
                    >
                    {trainingPlan}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default TrainingPlanCard;