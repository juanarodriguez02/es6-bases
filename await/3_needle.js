const needle = require('needle')

let endpoit = 'https://pokeapi.co/api/v2/type'


const f = async() =>{
    try {
        let response = await needle('get',endpoit)
        response.body.results.forEach(tipo => {
            console.log(`Tipo: ${tipo.name}`)
            console.log(`+++++++++++++++++++++`)
        })
    } catch (error) {
        console.error(error)
    }
}
f()