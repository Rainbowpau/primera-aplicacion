import tasks from "../tasksData.js"

function find(element) {
  const found = tasks.find(item => item.title === element);
  if (found) {
    return true
  } else {
    return false
  }
}

export default find
