import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home"; 
import { TestProvider } from "./context/TestContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestProvider>
      <Home />
    </TestProvider>
  </React.StrictMode>
);