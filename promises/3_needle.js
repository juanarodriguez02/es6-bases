const needle = require('needle')

const url = 'https://pokeapi.co/api/v2/type'

needle('get',url)
        .then((response)=>{
            console.log(response)
        })
        .then((data)=>{
            data.body.results.forEach(element => {
                console.log(`Tipo: ${element.name}`)
                console.log(`+++++++++++++++++++++`)
            })
        })
        .catch((error)=>{
            console.error(error)
        })