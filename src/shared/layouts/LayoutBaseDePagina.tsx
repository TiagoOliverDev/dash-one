import React from "react";
import { Box } from "@mui/system";
import {
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  titulo: string;
  children: React.ReactNode;
}

//iremos usar esse layout dentro de cada uma das nossas rotas, dentro da página que quisermos!
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  // toggleDrawerOpen é a função para abrir o drawer de menu lateral
  const { toggleDrawerOpen } = useDrawerContext()
  

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
      >
        {smDown && ( //se smDown == true ai mostra o menu hamburguer
          <IconButton onClick={toggleDrawerOpen} > 
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
