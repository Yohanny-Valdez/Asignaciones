/*Ingresar 2 numeros por teclado y determiner cual de los 2 numero es mayor*/

const prompt = require ('prompt');
prompt.start();
prompt.get(['num1', 'num2'], function(err, result){
    let num1 = result.num1;
    let num2 = result.num2;

    if (num1 > num2){
        console.log( num1 + ' es mayor ');
    } 
    else if (num1 < num2){
        console.log( num2 + ' es mayor ');
    }
    else if (num1 == num2){
        console.log ('Ambos valores son iguales')
    }

    })