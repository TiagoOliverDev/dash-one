import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/themes";
import { DarkTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          {/* Deixando o AppRoutes sendo filho do MenuLateral, sendo recebido em children */}
          <AppRoutes/>
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

