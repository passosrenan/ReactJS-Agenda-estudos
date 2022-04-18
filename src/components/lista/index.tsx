import React, { useState } from "react";
import '../../assets/img/check-mark.svg'
import { ITarefas } from "../../types/Tarefas";
import Item from "./item";
import style from './Lista.module.scss'

interface Props {
    tarefas:ITarefas[],
    selecionaTarefas:(tarefaSelecionada: ITarefas) => void,
}

function Lista({tarefas, selecionaTarefas}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefas={selecionaTarefas}
                        key={item.id}
                        {...item}
                    
                    />

                ))}
            </ul>
        </aside>
    )

}
export default Lista