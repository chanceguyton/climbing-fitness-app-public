import React, { useEffect, useState } from "react";
import { useTest } from "../context/TestContext";
import RadarChartComponent from "../components/Chart";
import TrainingPlanCard from "../components/TrainingPlanCard";
import AltTrainingCard from "../components/AltTrainingCard";
import { fetchTrainingPlan } from "../utils/APIHelper";
import "../styles/ResultsSection.css"

function ResultsSection() {
  const { result } = useTest();
  const [trainingPlan, setTrainingPlan] = useState(null);

  useEffect(() => {
    if (!result || result.length === 0) return;

    const fetchData = async () => {
      try {
        const plan = await fetchTrainingPlan({result});
        setTrainingPlan(plan);
      } catch (err) {
        console.error("API error:", err);
      }
    };

    fetchData();
  }, [result]);

  if (!result || result.length === 0) {
    return;
  }

  return (
    <section className="results-section">
      <h1>Your Results</h1>
      <div className="results-grid">
        <div className="chart-wrapper">
          <RadarChartComponent data={result} />
        </div>
        <div className="plan-wrapper">
        {trainingPlan ? (
        <TrainingPlanCard trainingPlan={trainingPlan} />
        ) : (
        <AltTrainingCard/>
        )}
        </div>
      </div>
      
    </section>
  );
}

export default ResultsSection;
