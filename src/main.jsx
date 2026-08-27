import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./shared/styles/reset.css";
import "./shared/styles/tokens.css";
import "./shared/styles/globals.css";
import "./index.css";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

import App from "./app/App";
import { CartProvider } from "./shared/context/CartProvider";
import ScrollToHashElement from "./shared/components/utils/ScrollToHashElement";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ScrollToHashElement />
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);