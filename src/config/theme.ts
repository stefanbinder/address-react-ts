import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#419EB5',
            main: '#41779E',
            dark: '#3B61A3',
            contrastText: '#eee',
        },
        secondary: {
            light: '#B8697E',
            main: '#AB5957',
            dark: '#915043',
            contrastText: '#eee',
        },
        error: {
            light: '#E64F35',
            main: '#C93E28',
            dark: '#AB231A',
            contrastText: '#eee',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: "4rem",
        },
        h2: {
            fontSize: "3.5rem",
        },
        h3: {
            fontSize: "3rem",
        },
        h4: {
            fontSize: "2.5rem",
        },
        h5: {
            fontSize: "1.2rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "1.2rem",
        },
    }
});
