import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ExpencesContextProvider from "./context/expencesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpencesContextProvider>
      <App />
    </ExpencesContextProvider>
  </React.StrictMode>
);
