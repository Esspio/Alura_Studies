import { tarefaInterface } from '../../utils/tarefa';
import {v4 as uuidv4} from 'uuid';
import style from './formulario.module.scss';
import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<tarefaInterface[]>>}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    };

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [...tarefasAntigas, {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }]);
        this.setState({
            nome: "",
            tempo: "00:00"
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>Adicione um novo estudo</label>
                    <input type='text'
                     name='tarefa'
                     id='tarefa'
                     onChange={evento => this.setState({...this.state, nome: evento.target.value})}
                     placeholder='O que deseja estudar?'
                     required/>

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>Tempo</label>
					<input type='time'
                     step='1'
                     name='tempo'
                     id='tempo'
                     value={this.state.tempo}
                     onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                     min='00:00:00'
                     max='01:30:00'
                     required/>
                </div>

                <Botao
                    type="submit"
                    texto='Adicionar'
                />
            </form>
        );
    }
}

export default Formulario;