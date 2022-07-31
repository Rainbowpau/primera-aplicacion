import tasks from "../tasksData.js";

function getTasks() {
  const titulos = tasks.map((task) => task.title);
  return titulos;
}

getTasks ()
export default getTasks
