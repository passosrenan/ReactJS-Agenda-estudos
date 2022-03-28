import React from 'react';
import Botao from '../components/botao';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
import style from './App.module.scss'




function App() {
 
  return (
    <div className={style.AppStyle}>
        <Formulario></Formulario>
        <Lista></Lista>
    </div>
  );
}

export default App;
