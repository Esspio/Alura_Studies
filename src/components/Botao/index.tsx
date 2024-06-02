import style from './botao.module.scss';
import React from 'react';

class Botao extends React.Component {
    render(){
        return(
            <button className={style.botao}>
                Botão
            </button>
        );
    }
}

export default Botao;