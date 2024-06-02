import style from './app.module.scss';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Cronometro } from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
