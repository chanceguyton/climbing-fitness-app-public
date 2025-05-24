import { createContext, useState, useContext } from "react";

const TestContext = createContext();

export const useTest = () => useContext(TestContext); 

export function TestProvider({ children }) {
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const [result, setResult] = useState(null);

  return (
    <TestContext.Provider value={{ inputValues, setInputValues, result, setResult }}>
      {children}
    </TestContext.Provider>
  );
}