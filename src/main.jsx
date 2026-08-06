import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./shared/styles/reset.css";
import "./shared/styles/tokens.css";
import "./shared/styles/globals.css";
import "./index.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import { ScrollToTop } from "./shared/components/ScrollTotheTop/ScrollToTop";

import App from "./app/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);