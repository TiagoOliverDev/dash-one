import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import { Avatar, Box, Divider, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Inbox } from "@mui/icons-material";

export const MenuLateral: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const theme = useTheme(); //useTheme consegue acessar o tema base da nossa aplicação
    
    return (
      <>
        <Drawer variant="permanent">
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">    
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar 
                        sx={{ height: theme.spacing(12),  width: theme.spacing(12)}}
                        src="https://images.unsplash.com/photo-1684789688834-82f671a97136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    />
                </Box>    

                <Divider/>

                <Box flex={1} > {/* Aqui significa que esse box vai ter todo o restante do espaço disponível */}
                <List
                    component="nav"
                >         
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Página inicial" />
                    </ListItemButton>
                </List>
                </Box>

            </Box>
        </Drawer>

        <Box height="100vh" marginLeft={theme.spacing(28)} >
            {children} {/* AppRoutes ta aqui */}
        </Box>
      </>
    );
  }
  