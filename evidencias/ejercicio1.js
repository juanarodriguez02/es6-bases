//CALLBACK XML 

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://urlhaus-api.abuse.ch/v1/urls/recent/'

const exito = (response)=>{
    const tipos = JSON.parse(response).urls
    tipos.forEach((tipo)=>{
        console.log(`Id: ${tipo.id}`)
        console.log(`----------------`)
    })
}

const fallo = (status)=>{
    console.log(status)
}

const get_data = (endpoint, exito, fallo)=>{
    let http = new XMLHttpRequest()
    http.open('get', endpoint)
    http.send()
    http.onload = function(){
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }
}

get_data(endpoint, exito, fallo)