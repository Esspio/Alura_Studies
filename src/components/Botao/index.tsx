import style from './botao.module.scss';
import React from 'react';

class Botao extends React.Component<{texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}> {
    render(){
        const {type = "button", onClick} = this.props;
        return(
            <button className={style.botao} onClick={onClick}>
                {this.props.texto}
            </button>
        );
    }
}

export default Botao;