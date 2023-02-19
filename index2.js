/*Ingresar por consola 2 numero y mostrar el resultado de la suma, resta, multiplicacion y division*/
const prompt = require('prompt');
prompt.start();
prompt.get(['valor1', 'valor2'], function (err, result) {
    let valor1 =  Number(result.valor1)
    let valor2 = Number(result.valor2)
    const suma = (valor1 + valor2);
    const resta= valor1 - valor2;
    const multiplicacion= valor1 * valor2;
    const division= valor1 / valor2;
console.log ("la suma es: " + suma )
console.log ("la resta es: " + resta )
console.log ("la multiplicacion es: " + multiplicacion )
console.log ("la division es: " + division )

});