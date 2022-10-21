//AWAIT 
//API GAME OF THRONES 

const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://api.gameofthronesquotes.xyz/v1/random/5'
}

const f = async() => {
    try {
        let response = await axios(config)
            console.log(response.name) 
            console.log(`|||||||||||||||||||||`)
        
    } catch (error) {
        console.error(error)
    }
}

f()