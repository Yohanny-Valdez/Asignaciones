/*Ingresar 3 numero por teclado y calcular el promedio de los 3*/

const prompt = require('prompt');
prompt.start();
prompt.get(['num1', 'num2', 'num3'], function (err, result) {
    let num1 =  Number(result.num1)
    let num2 = Number(result.num2)
    let num3 = Number(result.num3)
    const promedio = ( num1 + num2 + num3) /3 ;
console.log ("El promedio de los numeros es: " + promedio )
});