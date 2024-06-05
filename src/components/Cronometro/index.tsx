import style from "./cronometro.module.scss";
import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../commons/utils/time";
import { tarefaInterface } from "../../utils/tarefa";
import { useEffect, useState } from 'react';

interface Props{
    selecionado: tarefaInterface | undefined
}

export function Cronometro({selecinado} : Props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecinado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao texto="Começar"/>
        </div>
    )
}