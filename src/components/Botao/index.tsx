import style from './botao.module.scss';
import React from 'react';

class Botao extends React.Component<{texto: string}> {
    render(){
        return(
            <button className={style.botao}>
                {this.props.texto}
            </button>
        );
    }
}

export default Botao;