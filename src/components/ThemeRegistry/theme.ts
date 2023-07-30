import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export interface BreakPoints {
  brp: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#6750A4",
      light: "#f9f6ff",
      dark: "#4F378B"
    },
    secondary:{
      main: "#fff"
    },
    grey: {
      A700: "#1C1B1F",
      A400: "#79747E",
      "400": "#bdbdbd",
      A200: "#f5f5f4"
    },
    error: {
      main: "#B3261E",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
