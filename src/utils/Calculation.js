export function calculateFromInputs(inputArray) {
  const [weight, pullup, maxhang, endurance, core, grade] = inputArray.map((val) =>
    typeof val === "string" ? val.trim() : val
  );

  const sportGrades = [
    "6a", "6a", "6b", "6b", "6c", "6c", "6c+", "6c+",
    "7a", "7a", "7a+", "7a+", "7b", "7b", "7b+", "7b+",
    "7c", "7c+", "7c+",
    "8a", "8a", "8a+", "8a+", "8b", "8b", "8b+", "8b+",
    "8c", "8c", "8c+", "8c+",
    "9a", "9a", "9a+", "9a+",
    "9b", "9b", "9b+", "9c"
  ];

  const strengthScore = () => {
    const ratio = parseFloat(pullup) / parseFloat(weight);
    if (ratio < 1) return 0;
    return Math.round((ratio - 1) * 10);
  };

  const hangScore = () => {
    const ratio = parseFloat(maxhang) / parseFloat(weight);
    if (ratio < 1) return 0;
    return Math.round((ratio - 1) * 10);
  };

  const enduranceScore = () => {
    const inMin = Math.round(parseFloat(endurance) / 60);
    const scoreArray = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];

    if (inMin >= 6) return 10;

    for (let i = 0; i < scoreArray.length; i++) {
      if (inMin < scoreArray[i]) return i;
    }

    return 0;
  };

  const coreScore = parseFloat(core);

  const gradeScore = () => {
    const cleaned = grade.toLowerCase();
    const index = sportGrades.indexOf(cleaned);
    return index >= 0 ? index + 1 : 0; // +1 so 6a gets 1
  };

  const total = strengthScore() + hangScore() + enduranceScore() + coreScore;

  const predictedIndex = Math.min(sportGrades.length - 1, total);
  const predGrade = sportGrades[predictedIndex];

  const actualGrade = sportGrades[gradeScore() - 1] || "Invalid";

  console.log(strengthScore(), hangScore(), enduranceScore(), coreScore, predGrade, actualGrade);

  return [
    strengthScore(),
    hangScore(),
    enduranceScore(),
    coreScore,
    predGrade,
    actualGrade,
  ];
}