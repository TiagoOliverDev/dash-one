import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import React from "react";
import { Environment } from "../../environment";

interface IFerramentasDaListagem {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;

  textoDaBuscaNovo?: string;
  mostrarBotaoBuscaNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  textoDaBusca = " ",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoDaBuscaNovo = "Novo",
  mostrarBotaoBuscaNovo = true,
  aoClicarEmNovo,
}) => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          placeholder={Environment.INPUT_DE_BUSCA}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoBuscaNovo && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >
            {textoDaBuscaNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
