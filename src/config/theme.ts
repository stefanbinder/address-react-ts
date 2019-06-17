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
    grey: {
        light: '#192327',
        main: '#222D33',
        dark: '#192327',
        contrastText: '#eee',
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
    },
});
