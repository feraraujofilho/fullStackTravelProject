import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(75, 160, 180)',
        },
        secondary: {
            main: 'rgb(75, 160, 180)',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: `"Open Sans", sans-serif`,
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
})

export default theme;