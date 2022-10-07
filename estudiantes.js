var colors = require('colors');
const g1 = [
    "Laura",
    "Carlos",
    "Ana"
]

const g2 = [
    "Enrique",
    "Jairo",
    "Ana"
]

const g3 = [
    ...g1,
    "Diana",
    ...g2,
    "Duvan"
]

const estudiante = {
    id: 1,
    nombre: 'Juana',
    apellido: 'Rodriguez',
    identificacion: "9087998987",
    amigos: g3
}

console.log(estudiante);