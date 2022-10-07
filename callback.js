function llamarAlumno(alumno,callback){
    let llamadaAlumno= `Llamando alumno ${alumno}` 
    //Ejecutar la función callback
    callback(llamadaAlumno)
}

//Definir funcion callback 
const imprimir= (texto)=>{
    console.log(texto)
}

//Invocar la función principal llamarAlumno 
llamarAlumno("Juana Rodriguez", imprimir)
