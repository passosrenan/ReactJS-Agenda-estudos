import Botao from "../botao";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/Tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefas | undefined
    finalizarTarefa(): void
}

export function Cronometro({ selecionado, finalizarTarefa}: Props) {
    /* console.log('conversao para segundos', tempoParaSegundos('01:01:01')) */


    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(String(selecionado?.tempo)))
        }
    }, [selecionado])

    function regressiva(contador:number = 0){
        setTimeout(()=>{
            if(contador >0){
                setTempo(contador-1)
                return regressiva(contador-1)
            }
            finalizarTarefa()
        },1000)
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar
            </Botao>

        </div>

    )
}