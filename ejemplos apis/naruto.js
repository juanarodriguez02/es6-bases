const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://animechan.vercel.app/api/quotes/anime?title=naruto'
}

const f = async() => {
    try {
        let response = await axios(config)
        response.data.forEach(naruto => {
            console.log(`Nombre: ${naruto.anime}`)
            console.log(`Caracter: ${naruto.character}`)
            console.log(`*********************`)
        })
    } catch (error) {
        console.error(error)
    }
}

f()