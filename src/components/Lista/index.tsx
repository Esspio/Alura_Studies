import { tarefaInterface } from '../../utils/tarefa';
import Item from './Item';
import style from './lista.module.scss';

interface Props{
    tarefas: tarefaInterface[],
    selecionaTarefa: (tarefaSelecionada: tarefaInterface) => void;
}

function Lista({tarefas, selecionaTarefa}: Props){
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item 
                        key={item.id}
                        tarefa={tarefa.tarefa}
                        tempo={tarefa.tempo}
                        selecionaTarefa={selecionaTarefa}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;