import React, { useState } from "react";
import TextInputBox from "../components/textInput";
import { useTest } from "../context/TestContext";
import { calculateFromInputs } from "../utils/Calculation";
import "../styles/TestSection.css"

// regex for valid climbing grade (6a to 9c+)
const gradePattern = /^[6-9][a-c]\+?$/;

function TestSection() {
  const [errors, setErrors] = useState([false, false, false, false, false, false]);
  const { inputValues, setInputValues, setResult } = useTest();

  const handleSubmit = () => {
    const result = calculateFromInputs(inputValues);
    setResult(result);
  };

  const handleTextChange = (index, value) => {
    if (index === 5 && value !== "" && !gradePattern.test(value.trim().toLowerCase())) {
      const newErrors = [...errors];
      newErrors[index] = true;
      setErrors(newErrors);
      return;
    }

    const newErrors = [...errors];
    newErrors[index] = false;
    setErrors(newErrors);

    const updated = [...inputValues];
    updated[index] = value;
    setInputValues(updated);
  };

  return (
    <section className="test-section">
    <div className="test-layout">
      <div className="test-inputs">
        <h2>Take the Test</h2>
         <TextInputBox
          type="number"
          placeholder="Enter Bodyweight"
          externalChange={handleTextChange}
          index={0}
        />

        <TextInputBox
          type="number"
          placeholder="Enter Max Weight Pull-Up"
          externalChange={handleTextChange}
          index={1}
        />

        <TextInputBox
          type="number"
          placeholder="Enter Max Hang"
          externalChange={handleTextChange}
          index={2}
        />

        <TextInputBox
          type="number"
          placeholder="Enter Hang Time (seconds)"
          externalChange={handleTextChange}
          index={3}
        />

        <TextInputBox
          type="number"
          placeholder="Enter Core Strength Score (1-10)"
          externalChange={handleTextChange}
          index={4}
        />

        <TextInputBox
          type="text"
          placeholder="Enter Grade (e.g., 6a+)"
          externalChange={handleTextChange}
          index={5}
        />

        <button className="test-button" onClick={handleSubmit}>Calculate</button>

        {errors[5] && (
          <p style={{ color: "red", fontSize: "0.85rem" }}>
            Invalid grade format (must be 6a to 9c+)
          </p>
        )}
      </div>

    <div className="test-instructions">
      <h2>Instructions</h2>
      <div className="test-instruction-scroll">
        <p>Watch the video for a more complete explanation of the test. 
         Otherwise, just follow these instructions:
        </p> 
        <ul>
          <li>Enter your bodyweight, units don't matter as long as you are consistent</li>
          <li>Enter your maximum weight pullup, include bodyweight and added weight</li>
          <li>Enter the maximum weight you can hang from a 20mm edge, include bodyweight and added weight</li>
          <li>Enter the maximum time you can hang from a bar in seconds</li>
          <li>Enter your core score, instructions below</li>
          <li>Enter your max sport climbing grade according to the European scale</li>
        </ul>
        <p>
          For core, enter your score that you calculate from the following guidelines: 
        </p>
        <ul>
          <li>Tuck Hold
            <ul>
              <li>10 sec - 1pt</li>
              <li>20 sec - 2pts</li>
              <li>30 sec - 3pts</li>
            </ul>
          </li>
          <li>L Sit
            <ul>
              <li>10 sec - 4pts</li>
              <li>15 sec - 5pts</li>
              <li>20 sec - 6pts</li>
            </ul>
          </li>
          <li>Front Lever
            <ul>
              <li>5 sec - 7pts</li>
              <li>10 sec - 8pts</li>
              <li>20 sec - 9pts</li>
              <li>30+ sec - 10pts</li>
            </ul>
          </li>
        </ul>
        <p>
          From there, each metric will indexed with a score out of 10 which will be used to 
          calculate your predicted max grade and create your AI training plan.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}

export default TestSection;

