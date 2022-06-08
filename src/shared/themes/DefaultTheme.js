import { createTheme } from "@mui/material/styles";

export default createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f00',
            contrastText: '#fff',
        },
        info: {
            main: '#f00',
        },
        success: {
            main: '#f00',
        },
        background: {
            paper: '#fff',
        }
    }
});