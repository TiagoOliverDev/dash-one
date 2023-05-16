import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" >Teste</Button>}></Route>
                       
            <Route path="*" element={<Navigate to={"/pagina-inicial"} ></Navigate>}></Route> 
            {/* o path="*" serve para ser uma rota padrão que o react vai acessar, caso não exista outra ou não encontre... Serve para tratar erros de nomeclatura de url */}
        </Routes>
    )
}