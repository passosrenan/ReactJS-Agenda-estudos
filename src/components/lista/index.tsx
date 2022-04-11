import React, { useState } from "react";
import '../../assets/img/check-mark.svg'
import { Item } from './item'
import style from './Lista.module.scss'

interface ITarefas{
    tarefa: string, 
    tempo: string,
}

function Lista({tarefas}:{tarefas: ITarefas[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index)=>(
                    <Item
                        key={index}
                        tarefa ={item.tarefa}
                        tempo ={item.tempo}
                    
                    />

                ))}
            </ul>
        </aside>
    )

}
export default Lista