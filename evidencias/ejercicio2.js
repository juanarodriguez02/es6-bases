//AWAIT NEEDLE 

const needle = require('needle')

let endpoint = 'https://hp-api.herokuapp.com/api/characters/students'

const f = async () => {
    try {
        let response= await needle('get',endpoint)
        response.body.forEach((harry) => {
            console.log(`Nombre: ${harry.name}`)
			console.log(`Casa: ${harry.species}`)
            console.log(`+++++++++++++++++++++++`)
        });
    } catch (error) {
        console.log(error)
    }
}

f()