import { Typography, createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark', //serve para o texto e icon ficar em constraste com a cor do tema
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
            default: '#303134', //usado na cor de fundo
            paper: '#202124', //usando dentro de cards
        }
    },
    typography: { //estilização dedicada a todos os Typography para ficar em contraste com a cor do tema
        allVariants: {
            color: 'white',
        }
    }
})