let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://rickandmortyapi.com/api/character'

function exito(response){
    console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}

function get_data(endpoint, exito, fallo){
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