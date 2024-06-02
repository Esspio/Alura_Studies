import { useState } from 'react';
import Item from './Item';
import style from './lista.module.scss';

function Lista(){

    const [tarefas, setTarefas] = useState([
        {
            nome: 'React',
            tempo: '02:30:00'
        },
        {
            nome: 'Javascript',
            tempo: '01:00:00'
        }
    ]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {nome: "Estudar state", tempo: "05:00:00"}]);     
            }}>Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item key={index} tarefa={tarefa.nome} tempo={tarefa.tempo}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;