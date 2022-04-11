import React, { useState } from 'react';
import Botao from '../components/botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
import style from './App.module.scss'




function App() {
  const [tarefas, setTarefas] = useState(
    [
        {tarefa:"JavaScript", 
        tempo:"01:30:00"},
      
        {tarefa:"React",
         tempo:"02:00:00"},

        {tarefa:"Java", 
        tempo: "01:00:00"}
      ]
)

  return (
    <div className={style.AppStyle}>
        <Formulario ></Formulario>
        <Lista tarefas={tarefas}></Lista>
        <Cronometro></Cronometro>
    </div>
  );
}

export default App;
