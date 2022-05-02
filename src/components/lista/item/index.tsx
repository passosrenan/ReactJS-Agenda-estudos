import { ITarefas } from '../../../types/Tarefas'
import style from '../Lista.module.scss'

interface Props extends ITarefas{
    selecionaTarefas:(tarefaSelecionada: ITarefas) => void,
}
export default function Item ({tarefa, tempo, selecionado, completado, id , selecionaTarefas}: Props){
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
         onClick ={()=> selecionaTarefas({
            tarefa, tempo,selecionado,completado,id
        })}>
        <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span aria-label='tarefa concluída' className={style.concluido}></span>}
    </li>


    )
}
