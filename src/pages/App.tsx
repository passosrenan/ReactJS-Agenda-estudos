import React, { useState } from 'react';
import Botao from '../components/botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
import { ITarefas } from '../types/Tarefas';
import style from './App.module.scss'




function App() {
  const [tarefas, setTarefas] = useState <ITarefas[]> ([])
  const [selecionado, setSelecionado] = useState <ITarefas>()
   
  function selecionaTarefa(tarefaSelecionada : ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas =>({
      ...tarefas, selecionado: tarefas.id === tarefaSelecionada.id ?true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista
        tarefas={tarefas}
        selecionaTarefas={selecionaTarefa}

        ></Lista>
        <Cronometro></Cronometro>
    </div>
  );
}

export default App;
