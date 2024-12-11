import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    palette: {
        primary: {
            light: "#102851",
            main: "#2AA7FF",
            dark: "#1B3C74",
            contrastText: "#1B3C74",
        },
    },
});

export default theme;