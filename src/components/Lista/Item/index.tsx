import { tarefaInterface } from '../../../utils/tarefa';
import style from './item.module.scss';

interface Props extends tarefaInterface {
    selecionaTarefa: (tarefaSelecionada: tarefaInterface) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa} : Props){
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa(
            {tarefa, tempo, selecionado, completado, id}
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo} </span>
        </li>
    )
}