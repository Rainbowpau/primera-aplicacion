import tasks from "../tasksData.js";

function getDesc(title){
const retorno= tasks.find(tarea=>title===tarea.title)
return retorno?.desc
}

export default getDesc