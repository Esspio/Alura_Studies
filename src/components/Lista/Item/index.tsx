import { tarefaInterface } from '../../../utils/tarefa';
import style from '../lista.module.scss';

export default function Item({tarefa, tempo, selecionado, completado, id} : tarefaInterface){
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo} </span>
        </li>
    )
}