import tasks from "../tasksData.js"

function filtrar(filter) {
  const tareas = tasks.filter(tarea => tarea.title.includes(filter))
  return tareas
}

export default filtrar
