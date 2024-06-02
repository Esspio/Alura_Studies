import style from "./cronometro.module.scss";
import Botao from "../Botao";
import Relogio from "./Relogio";

export function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao texto="Começar"/>
        </div>
    )
}