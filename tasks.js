import edit from "./Comandos/edit.js"
import filter from "./Comandos/filter.js"
import find from "./Comandos/find.js"
import list from "./Comandos/list.js"
import retorno from "./Comandos/return.js"


switch (process.argv[2]) {
  case "find":
    console.log(find(process.argv[3]));
    break;
  case "filter":
    console.log(filter(process.argv[3]));
    break;
  case "edit":
    console.log(edit(process.argv[3]));
    break;
  case "list":
    console.log(list());
    break;
  case "return":
    console.log(retorno(process.argv[3]));
    break;
  default:
    console.log("no encontrado");
    break;
}