import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#1D4773',
            main: '#1C4C5C',
            dark: '#1A2C69',
            contrastText: '#ddd',
        },
        secondary: {
            light: '#025E73',
            main: '#025E73',
            dark: '#0ff',
        },
        error: {
            light: '#F2C46D',
            main: '#F2A172',
            dark: '#F18170',
            contrastText: '#513110',
        },
    },
});
