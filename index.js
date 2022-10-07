import { materias } from "./materias.js";
import pkg from 'colors'

//Metodos de los objetos o arreglos 
//Foreach: Permiten recorrer un arreglo

// materias.forEach((materia)=>{
//     if(materia.tipo === 'Tecnica'){
//         console.log(`materia ${materia.nombre}`.white)
//         console.log(`instructores ${materia.instructor}`.blue)
//     }
// })

// //Map: construye un arreglo con base en otro
// const profesores = materias.map((materia)=>{
//     return materia.instructor
// })

//find: encontrar la primera ocurrencia(elemento)
//que cumpla con una condición dada

//const php = materias.filter((materia)=>{
  //  return materia.instructor === "Jonathan"
//})

/*Push: agregar elementos a un arreglo 
materias.push({
    id:4,
    nombre: "php basico",
    instructor: "Cristian",
    tipo: "Tecnica",
    notas: [
        80,
        75,
        70
    ]
})*/

//Splice: eliminar el elemento de un arreglo
//materias.splice(2)

//actualizar: findIndex

const actualizar=materias.findIndex((materia)=>materia.instructor==="Adriana")
materias[actualizar].tipo="Juana"

console.log(materias)