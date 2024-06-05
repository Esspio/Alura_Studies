import style from './app.module.scss';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Cronometro } from '../components/Cronometro';
import { useState } from 'react';
import { tarefaInterface } from '../utils/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<tarefaInterface[] | []>([]);
  const [selecionado, setSelecionado] = useState<tarefaInterface[]>();

  function selecionaTarefa(tarefaSelecionada: tarefaInterface){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }

  function finalizarTarefa() {
    if(selecionado) {
        setSelecionado(undefined);
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
