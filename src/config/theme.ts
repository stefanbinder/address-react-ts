import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

interface IColorDetails {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface IColorTheme {
    primary: IColorDetails,
    secondary: IColorDetails,
    error: IColorDetails,
    grey: IColorDetails,
}

export const ColorTheme: IColorTheme = {
    primary: {
        light: '#419EB5',
        main: '#41779E',
        dark: '#2b638c',
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
    grey: {
        light: '#2b363a',
        main: '#222D33',
        dark: '#192327',
        contrastText: '#ddd',
    }
}

export const theme = createMuiTheme({
    palette: {
        primary: ColorTheme.primary,
        secondary: ColorTheme.secondary,
        error: ColorTheme.error,
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
            fontSize: "2.5rem",
        },
        h2: {
            fontSize: "2.2rem",
        },
        h3: {
            fontSize: "2rem",
        },
        h4: {
            fontSize: "1.8rem",
        },
        h5: {
            fontSize: "1.2rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "1.2rem",
        },
    },
});
