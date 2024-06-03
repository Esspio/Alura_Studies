import { tarefaInterface } from '../../utils/tarefa';
import Item from './Item';
import style from './lista.module.scss';

function Lista({tarefas}: {tarefas: tarefaInterface[]}){
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item key={index} tarefa={tarefa.nome} tempo={tarefa.tempo}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;