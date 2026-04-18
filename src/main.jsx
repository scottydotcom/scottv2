import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme.js';
import App from "./App.jsx";
import "@fontsource/plus-jakarta-sans/400.css"; // Regular
import "@fontsource/plus-jakarta-sans/500.css"; // Medium
import "@fontsource/plus-jakarta-sans/600.css"; // SemiBold
import "@fontsource/plus-jakarta-sans/700.css"; // Bold


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
