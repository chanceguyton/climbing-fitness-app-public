import React from "react"
import {Radar, RadarChart, PolarGrid, 
        PolarAngleAxis, PolarRadiusAxis,
        ResponsiveContainer} from "recharts"
import "../styles/Chart.css"

function RadarChartComponent({data}){

    const sportGrades = [
        "6a", "6a", "6b", "6b", "6c", "6c", "6c+", "6c+",
        "7a", "7a", "7a+", "7a+", "7b", "7b", "7b+", "7b+",
        "7c", "7c+", "7c+",
        "8a", "8a", "8a+", "8a+", "8b", "8b", "8b+", "8b+",
        "8c", "8c", "8c+", "8c+",
        "9a", "9a", "9a+", "9a+",
        "9b", "9b", "9b+", "9c"
    ];

    const gradeMap = (grade) => {
        return sportGrades.indexOf(grade) + 1;
    }

    if (!Array.isArray(data) || data.length < 6) {
        console.log("Not enough data")
        return null;
    }

    const chartData = [
    { metric: "Pull-Up Strength", predicted: data[0]},
    { metric: "Finger Strength", predicted: data[1]},
    { metric: "Endurance", predicted: data[2]},
    { metric: "Core", predicted: data[3]},
    { metric: "Grade", predicted: gradeMap(data[5])/4}
  ];

  return (
    <div className="chart-outer">
        <h2 className="chart-title">Your Climbing Profile</h2>
         <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
                <PolarGrid />
                <PolarAngleAxis
                    dataKey="metric"
                    tick={{
                    fill: "#1a1a1a",           
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif"
                    }}
                    stroke="#e0e0e0"             
                />
                <PolarRadiusAxis
                    angle={30}
                    domain={[0, 10]} // ✅ This sets the radial scale
                    tick={() => null} // optional: hides numeric labels
                    stroke="#e0e0e0"
                    axisLine={false}
                    tickLine={false}
                />
                <Radar
                    name="Predicted"
                    dataKey="predicted"
                    stroke="#007bff"
                    fill="#007bff"
                    fillOpacity={0.6}
                />
            </RadarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )

}

export default RadarChartComponent;