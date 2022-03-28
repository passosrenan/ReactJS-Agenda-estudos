import { render } from "@testing-library/react";
import { resourceUsage } from "process";
import React from "react";
import { text } from "stream/consumers";
import Botao from "../botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    render() {
        return (
            
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Adicione uma tarefa"
                        required
                    />
                </div>
                <div>
                    <label>Determine o tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
                </div>
                <Botao>
                    Adicionar

                </Botao>
                
                
                    
            
            </form>

        )


    }
}
export default Formulario










