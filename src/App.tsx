import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./app/layout";
import "./assets/theme/theme.scss";

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
