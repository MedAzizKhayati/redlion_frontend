import { createTheme } from "@mui/material/styles";

export default createTheme({
    shape: {
        borderRadius: 6,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
            contrastText: '#000',
        },
        secondary: {
            main: '#f00',
            contrastText: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#000',
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
        action: {
            // selected: '#f00',
            // selectedOpacity: 0.1,

            hoverOpacity: 0.1,
            hover: '#f00',

            // forcus: "#f00",
            // focusOpacity: 0.1,

            // activatedOpacity: 0.1,
            // active: "#f00",
        }
    }
});

