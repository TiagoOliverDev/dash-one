import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";


export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    
    useEffect(() => {
        // Toda consulta no backend deve ser realizada dentro de um useEffect pq qualquer caso fique fora do useEffect qualquer mudança de estado ele irá consultar o backend novamente e isso causa problemas de performance
        // Já no useEffecct conseguimos fazer essa consulta uma única vez em momentos específicos.
        PessoasService.getAll(1, busca)
            .then((result) => {
                if(result instanceof Error){
                    //caso der erro na consulta     
                    alert(result.message);
                }else{              
                    console.log(result)
                }
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
        
        </LayoutBaseDePagina>
    )
}