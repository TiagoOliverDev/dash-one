import { createContext, ReactNode, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
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

  const toggleDrawerOpen = useCallback(() => {
    //useCallback serve para armazenar funções dentro dele
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []) // [] = dependência


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
      {children}
    </DrawerContext.Provider>
  );
};
