import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff', //serve para o texto
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            default: '#f7f7f3', //usado na cor de fundo
            paper: '#ffffff', //usando dentro de cards
        }
    }
})