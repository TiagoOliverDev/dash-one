import { useCallback, useRef } from "react"


export const useDebounce = (delay = 1000, notDelayInFirstTime = true) => {
    // Problema: temos um campo de busca na rotaa /pessoas e a cada letra digitada a aplicação consulta o backend
    // o useDebounce é criado para resolver esse problema
    // o isFirstTime serve para os casos em que o usuário entrou a primeira vez na página, nesse caso é importante consultar o backend ao mesmo tempo que entra na página
    const debouncing = useRef<NodeJS.Timeout>();
    const isFirstTime = useRef(notDelayInFirstTime);
    
    const debounce = useCallback((func: () => void) => {
        if(isFirstTime.current){
            isFirstTime.current = false;
            func()
        } else {
            if(debouncing.current){
                clearTimeout(debouncing.current)
            }
            debouncing.current = setTimeout(() => {
                func()
            }, delay)
        }
    },[delay])

    return { debounce }
}
