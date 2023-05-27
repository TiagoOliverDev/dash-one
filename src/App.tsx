import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/themes";
import { DarkTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { MenuLateral } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            {/* Deixando o AppRoutes sendo filho do MenuLateral, sendo recebido em children */}
            <AppRoutes/>
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

