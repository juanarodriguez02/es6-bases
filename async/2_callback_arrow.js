let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
        console.log(`----------------`)
    })
    //console.log(JSON.parse(response))
}

const fallo = (status)=>{
    console.log(status)
}

const get_data = (endpoint, exito, fallo)=>{
    //2.Se crea el objeto de conexión
    let http = new XMLHttpRequest()
    //3. abrir conexión a la API 
    http.open('get', endpoint)
    //4. Enviar la solicitud(request) a la API
    http.send()
    //5.Hacer el tratamiento de la response
    http.onload = function(){
        if(http.status === 200){
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }
}

//Invocar la función get_data
get_data(endpoint, exito, fallo)