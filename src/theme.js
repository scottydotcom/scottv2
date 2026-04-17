// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  colors: {
    // Warm beige → rosewood gradient (UNCHANGED)
    brand: {
      50: "#f8f3ef",
      100: "#e9ded4",
      200: "#d8c3b3",
      300: "#c7a892",
      400: "#b68d72",
      500: "#a57352", // primary accent
      600: "#8a5c3f",
      700: "#6f4630",
      800: "#543120",
      900: "#3a1e14",
    },

    // Olive greens (UNCHANGED)
    olive: {
      50: "#f4f6f1",
      100: "#e3e8d9",
      200: "#c7d0b3",
      300: "#aab88d",
      400: "#8ea067",
      500: "#73874e",
      600: "#5b6b3d",
      700: "#44502d",
      800: "#2d351d",
      900: "#171c0e",
    },
  },

  semanticTokens: {
    colors: {
      bg: {
        default: "#0f0f0d",
        _dark: "#0f0f0d",
      },
      surface: {
        default: "rgba(255,255,255,0.04)",
        _dark: "rgba(255,255,255,0.04)",
      },
      text: {
        default: "#f2eee9",
        _dark: "#f2eee9",
      },
      muted: {
        default: "#b8b3ac",
        _dark: "#b8b3ac",
      },

      // Warm beige accent (UNCHANGED)
      accent: {
        default: "brand.500",
        _dark: "brand.500",
      },

      // Warm highlight (no blue)
      highlight: {
        default: "brand.300",
        _dark: "brand.300",
      },

      success: {
        default: "olive.400",
        _dark: "olive.400",
      },
    },
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "bg",
        color: "text",
      },
    },
  },
});

export default theme;
