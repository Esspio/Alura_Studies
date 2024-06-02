import Item from './Item';
import style from './lista.module.scss';

function Lista(){

    const tarefas = [
        {
            nome: 'React',
            tempo: '02:30:00'
        },
        {
            nome: 'React',
            tempo: '01:00:00'
        }
    ]

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