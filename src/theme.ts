import { createMuiTheme } from '@material-ui/core/styles'
import { primary, secondary, error, background } from './palette'

const theme = createMuiTheme({
    palette: {
        primary,
        secondary,
        error,
        background
    }
})

export default theme
