let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

//Funcion para conectar a un api en modo asincrono
const get_data = (endpoint)=>{
    //Definir una promesa para la conexión a la api
    let promise = new Promise((resolve, reject)=>{
        //1.Se crea el objeto de conexión xmlhttp
        const http = new XMLHttpRequest();
        //2. abrir conexión a la API 
        http.open('get', endpoint)
        //3. Enviar la solicitud(request) a la API
        http.send()
        //4.Hacer el tratamiento de la response
        http.onload = function(){
            if(http.status === 200){
                resolve(http.responseText)
            }else{
                reject(http.status)
            }
        }
    })
    return promise
}

const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Url: ${tipo.url}`)
        console.log(`Tipo: ${tipo.name}`)
        console.log(`||||||||||||||||||`)
    })
    //console.log(JSON.parse(response))
}

const fallo = (status)=>{
    console.log(status)
}

async function f(){
    try{
        let response = await get_data(endpoint)
        exito(response)
    } catch(error){
        fallo(error)
    }
}
f()
