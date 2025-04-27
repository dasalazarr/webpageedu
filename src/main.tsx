import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { TempoDevtools } from "tempo-devtools";

// Create a wrapper component to handle TempoDevtools initialization
const AppWithTempoInit = () => {
  useEffect(() => {
    // Function to initialize TempoDevtools
    const initTempoDevtools = () => {
      try {
        TempoDevtools.init();
        window.removeEventListener("click", initTempoDevtools);
      } catch (error) {
        console.error("Error initializing TempoDevtools:", error);
      }
    };

    // Add event listener for user interaction
    window.addEventListener("click", initTempoDevtools, { once: true });

    // Cleanup function
    return () => {
      window.removeEventListener("click", initTempoDevtools);
    };
  }, []);

  return <App />;
};

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AppWithTempoInit />
    </BrowserRouter>
  </React.StrictMode>,
);
