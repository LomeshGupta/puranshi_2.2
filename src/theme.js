// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800", // Orange
    },
    secondary: {
      main: "#757575", // Grey
    },
    background: {
      default: "#F5F5F5", // Light background
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      color: "#FF9800",
    },
    h2: {
      fontWeight: 500,
      color: "#757575",
    },
  },
});

export default theme;
