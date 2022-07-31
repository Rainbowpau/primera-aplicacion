import tasks from "../tasksData.js";

function retorno(title){
const retorno= tasks.find(tarea=>title===tarea.title)
return retorno?.desc
}

export default retorno