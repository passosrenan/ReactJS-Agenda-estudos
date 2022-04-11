import { render } from "@testing-library/react";
import { resourceUsage } from "process";
import React from "react";
import { text } from "stream/consumers";
import Botao from "../botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa:"", tempo:"00:00"
    }

    adicionarTarefa(evento:React.FormEvent){
        evento.preventDefault()
        console.log('state: ',this.state)
    }

    render() {
        return (
            
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange = {evento => this.setState({...this.state, tarefa:evento.target.value})}
                        placeholder="Adicione uma tarefa"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label>Determine o tempo</label>
                    <input 
                        type="time"
                        name="tempo"
                        id="tempo"
                        onChange = {evento => this.setState({...this.state, tempo:evento.target.value})}
                        step="1"
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar

                </Botao>
                
                
                    
            
            </form>

        )


    }
}
export default Formulario










