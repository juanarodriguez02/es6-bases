//PROMISES AXIOS
 
const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://emojihub.herokuapp.com/api/all'
}

axios(config)
    .then((response)=>{
        return response.data
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Nombre: ${element.name}`)
            console.log(`-----------------------`)
        })
    })
    .catch((error)=>{
        console.error(error)
    })
