const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://restcountries.com/v3.1/all'
}

const f = async() => {
    try {
        let response = await axios(config)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

f()