import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
} 

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    //useCallback serve para armazenar funções dentro dele
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');

  }, []) // [] = dependência

  const theme = useMemo(() => {
    //useMemo serve para armazenar valores
    if (themeName === 'light') return LightTheme;
    return DarkTheme;

  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme}}>
        <ThemeProvider theme={DarkTheme}>
            <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                {children}
            </Box>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
