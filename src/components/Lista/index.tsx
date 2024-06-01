import React from "react";

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
        <aside>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <h3>{tarefa.nome}</h3>
                        <span>{tarefa.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;