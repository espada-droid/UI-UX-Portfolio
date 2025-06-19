import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Portfolio from "./pages/Portfolio";
import { ThemeProvider } from "./hooks/useTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);
