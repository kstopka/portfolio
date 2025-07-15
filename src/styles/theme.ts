import { DefaultTheme } from "styled-components";

export const baseTheme = {
  layout: {
    maxWidth: "1440px",
    paddingX: "108px",
    paddingY: "48px",
    paddingXMobile: "16px",
    paddingYMobile: "16px",
    navigationHeight: "78px",
    sectionWrapperWidth: "552px",
  },
  breakpoints: {
    sm: "768px",
    md: "1024px",
    lg: "1200px",
    xl: "1440px",
  },
  fonts: {
    family: {
      main: "Livvic",
      secondary: "Cabin",
    },
    size: {
      h1: "42px",
      h2: "36px",
      h3: "32px",
      h4: "24px",
      h5: "20px",
      h6: "16px",
      p: "16px",
      medium: "18px",
      small: "13px",
    },
  },
  transitions: {
    standard: ".2s all linear",
    time: ".25s",
    type: "linear",
  },
  colors: {
    error: {
      10: "#dc2626",
      20: "#b91c1c",
      30: "#991b1b",
    },
    warning: {
      10: "#d97706",
      20: "#b45309",
      30: "#92400e",
    },
    success: {
      10: "#15803d",
      20: "#166534",
      30: "#14532d",
    },
  },
};

export const darkColors = {
  primary: {
    10: "#3b82f6",
    20: "#10b981",
    30: "#f59e0b",
    40: "#9333ea",
    50: "#db2777",
    60: "#0ea5e9",
    70: "#14b8a6",
    80: "#f43f5e",
    90: "#8b5cf6",
  },
  neutral: {
    10: "#f9fafb",
    20: "#e5e7eb",
    30: "#d1d5db",
    40: "#d1d5db",
    50: "#d1d5db",
    60: "#d1d5db",
    70: "#d1d5db",
    80: "#d1d5db",
    90: "#d1d5db",
  },

  shades: {
    asHeader: "#000000",
  },
  background: "#1f2937",
  secondaryBackground: "#111827",
};

export const lightColors = {
  primary: {
    10: "#2563eb",
    20: "#059669",
    30: "#b45309",
    40: "#9333ea",
    50: "#db2777",
    60: "#0ea5e9",
    70: "#14b8a6",
    80: "#f43f5e",
    90: "#8b5cf6",
  },
  neutral: {
    10: "#0f172a",
    20: "#1e293b",
    30: "#334155",
    40: "#374151",
    50: "#374151",
    60: "#374151",
    70: "#374151",
    80: "#374151",
    90: "#374151",
  },
  shades: {
    asHeader: "#000000",
  },
  background: "#e5e7eb",
  secondaryBackground: "#e9e2df",
  // secondaryBackground: "#d1d5db",
};

const themeDark: DefaultTheme = {
  ...baseTheme,
  colors: { ...baseTheme.colors, ...darkColors },
};

const themeLight: DefaultTheme = {
  ...baseTheme,
  colors: { ...baseTheme.colors, ...lightColors },
};

const theme = {
  dark: themeDark,
  light: themeLight,
};

export default theme;
