// Archivo: src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// ¡CLAVE! Asegúrate de importar el archivo CSS principal
import "./App.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
