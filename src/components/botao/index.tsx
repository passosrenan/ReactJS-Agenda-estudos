import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}>
{
    render() {
        const {type = 'button', onClick } = this.props
        return (
            <button className={style.botao} type={type} onClick={onClick} >
                {this.props.children}
            </button>

        )

    }

}
export default Botao