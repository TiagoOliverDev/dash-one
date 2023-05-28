import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Avatar,
  Box,
  Divider,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Inbox } from "@mui/icons-material";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface ListItemLinkProps {
  label: string;
  icon: string;
  to: string; //serve para ir para outra rota
  onClick: (() => void) | undefined; //serve para quando eu estiver com o menu lateral aberto e clicar na opção de menu, vou querer fechar o menu lateral
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  label,
  icon,
  to,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to); //pega dentro do router dom e vai interpretar para deixar algumas config disponiveis
  const match = useMatch({ path: resolvePath.pathname, end: false }); // agora o nosso match irá saber se nossa opção de menu está selecionada ou não

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = useTheme(); //useTheme consegue acessar o tema base da nossa aplicação
  const smDown = useMediaQuery(theme.breakpoints.down("sm")); //hook do material ui para responsividade, nesse caso retorna true se for menor que 600px

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://images.unsplash.com/photo-1684789688834-82f671a97136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            {/* Aqui significa que esse box vai ter todo o restante do espaço disponível */}
            <List component="nav">
              {/* Ṕercorrendo nosso drawerOptions para setar opções de menu dinâmicamente */}
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children} {/* AppRoutes ta aqui */}
      </Box>
    </>
  );
};
