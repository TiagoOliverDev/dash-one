import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"

import { useEffect, useMemo, useState } from "react";
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { Environment } from "../../shared/environment";


export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce();

    const [rows, setRows] = useState<IListagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    
    useEffect(() => {
        setIsLoading(true) //garantindo que irá consultar o backend
        // Toda consulta no backend deve ser realizada dentro de um useEffect pq qualquer caso fique fora do useEffect qualquer mudança de estado ele irá consultar o backend novamente e isso causa problemas de performance
        // Já no useEffecct conseguimos fazer essa consulta uma única vez em momentos específicos.
        debounce(() => {
            PessoasService.getAll(1, busca)
                .then((result) => {
                    setIsLoading(false) //assim que realizou a consulta já seta false aqui para parar de mostrar o feedback para o user

                    if(result instanceof Error){
                        //caso der erro na consulta     
                        alert(result.message);
                    }else{              
                        console.log(result)
                        setRows(result.data);
                        setTotalCount(result.totalCount)
                    }
                })          
        })
    }, [busca]);

    return(
        <LayoutBaseDePagina 
            titulo="Listagem de pessoas"
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca={true}
                    textoDaBusca={busca}
                    textoDaBuscaNovo="Nova"
                    aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }
        >
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome completo</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>Ações</TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {totalCount === 0 && !isLoading &&(
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableFooter>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan={3}> 
                                    <LinearProgress variant="indeterminate" />                           
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>

                </Table>
            </TableContainer>
            
        </LayoutBaseDePagina>
    )
}