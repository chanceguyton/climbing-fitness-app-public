import { GoogleGenAI } from "@google/genai";

// Load API key from environment variable
const key = import.meta.env.VITE_GOOGLE_API_KEY;

const ai = new GoogleGenAI({ apiKey: key });

export async function fetchTrainingPlan({ result }) {
  const prompt = `I am a rock climber. Here are strength metrics scored out of ten. Pull up 
  strength: ${result[0]}, finger strength: ${result[1]}, endurance: ${result[2]}, and core: ${result[3]}. 
  My predicted climbing grade is ${result[4]} and my actual climbing grade is
  ${result[5]}. State my scores in each area, my predicted and actual climbing grades.
  Then identify key weaknesses holding me back and create a comprehensive climbing
  training plan. Omit additional tips that are not strictly about the training plan.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [prompt],
  });

  return response.text;
}


