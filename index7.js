/*Ingresar las edades y determiner si pueden votar mostrando los resultados por consola*/

const prompt = require ('prompt');
prompt.start();



prompt.get(['edad',], function(err, result){
    let edad = result.edad;
    const limite= 18;
    

    if (edad >= limite){
        console.log( ' Usted puede votar ');
    } 
    else if (edad < limite){
        console.log( ' Usted NO puede votar ');
    }

    })