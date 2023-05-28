import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface IDrawerOptions {
  icon: string;
  label: string;
  path: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IThemeProviderProps {
  children: ReactNode;
} 

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    //useCallback serve para armazenar funções dentro dele
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []) // [] = dependência

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []) // Função para inserir opções de menu na sidebar lateral


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
      {children}
    </DrawerContext.Provider>
  );
};
