import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  // useEffect garante que o que estiver dentro dele seja executado somente uma vez
  useEffect(() => {
    //setando as opções de menu na sidebar lateral
    setDrawerOptions([
      {
        icon: "home",
        path: "/pagina-inicial",
        label: "Página inicial",
      },
      {
        icon: "star",
        path: "/teste",
        label: "Star",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />}></Route>
                                                  
      <Route
        path="*"
        element={<Navigate to={"/pagina-inicial"}></Navigate>}
      ></Route>
      {/* o path="*" serve para ser uma rota padrão que o react vai acessar, caso não exista outra ou não encontre... Serve para tratar erros de nomeclatura de url */}
    </Routes>
  );
};
