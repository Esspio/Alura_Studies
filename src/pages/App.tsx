import style from './app.module.scss';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Cronometro } from '../components/Cronometro';
import { useState } from 'react';
import { tarefaInterface } from '../utils/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<tarefaInterface[] | []>([]);
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
