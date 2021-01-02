import {createMuiTheme} from '@material-ui/core/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const lightOrange = '#996c3b'
const darkBlue = '#014a7e'

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            grey: 'darkgrey'
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway, Trebuchet MS, sans-serif',
            fontSize: '1rem',
            fontWeight: '700',
            textTransform: 'none'
        },
        estimate: {
            fontFamily: 'Pacifico, Trebuchet MS, sans-serif',
            color: 'white',
            borderRadius: '50px',
            textTransform: 'none',
            backgroundColor: arcOrange,
            '&:hover': {
                backgroundColor: lightOrange
            }
        },
        learnButton: {
            borderRadius: 50,
            borderWidth: 1,
            color: arcBlue,
            borderColor: arcBlue,
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: darkBlue,
                color: 'white'
            }
        },
        darkText: {
            color: 'darkgrey'
        },
        fontFamily: 'Roboto, Helvetica, Trebuchet MS, sans-serif'
    }
})