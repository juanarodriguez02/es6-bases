import { materias } from "./materias.js";
import pkg from 'colors'

//Splice: eliminar el elemento de un arreglo
/*const notas = materias.splice((materia)=>{
    return materia.notas
})*/

const notas = materias.splice((materia)=>{
    return materia.notas === "45"
})
//actualizar: findIndex

console.log(notas)