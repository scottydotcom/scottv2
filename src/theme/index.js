// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  colors: {
    // Warm beige → rosewood gradient
    brand: {
      50:  "#f8f3ef",
      100: "#e9ded4",
      200: "#d8c3b3",
      300: "#c7a892",
      400: "#b68d72",
      500: "#a57352",   // primary accent (warm beige-brown)
      600: "#8a5c3f",
      700: "#6f4630",
      800: "#543120",
      900: "#3a1e14",
    },

    // Olive greens (muted, natural)
    olive: {
      50:  "#f4f6f1",
      100: "#e3e8d9",
      200: "#c7d0b3",
      300: "#aab88d",
      400: "#8ea067",
      500: "#73874e",   // main olive
      600: "#5b6b3d",
      700: "#44502d",
      800: "#2d351d",
      900: "#171c0e",
    },

    // Deep muted blues (moody, atmospheric)
    blue: {
      50:  "#eef4fa",
      100: "#d4e0ef",
      200: "#a9c1df",
      300: "#7ea2cf",
      400: "#5373b5",
      500: "#3a558f",   // main blue
      600: "#2d426f",
      700: "#20304f",
      800: "#141e30",
      900: "#0a101a",
    },
  },

  // Semantic tokens for dark mode
  semanticTokens: {
    colors: {
      bg: {
        default: "#0f0f0d",   // warm charcoal
        _dark: "#0f0f0d",
      },
      surface: {
        default: "rgba(255,255,255,0.04)", // subtle cards
        _dark: "rgba(255,255,255,0.04)",
      },
      text: {
        default: "#f2eee9",   // warm off-white
        _dark: "#f2eee9",
      },
      muted: {
        default: "#b8b3ac",   // warm muted beige
        _dark: "#b8b3ac",
      },
      accent: {
        default: "brand.500", // warm beige accent
        _dark: "brand.500",
      },
      highlight: {
        default: "blue.400",  // subtle blue highlight
        _dark: "blue.400",
      },
      success: {
        default: "olive.400",
        _dark: "olive.400",
      },
    },
  },

  styles: {
    global: {
      body: {
        bg: "bg",
        color: "text",
      },
    },
  },
});

export default theme;
