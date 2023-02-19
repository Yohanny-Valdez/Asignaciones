/* Calcular el area de un cuadrado de lado 5 */
/* en este no entendí bien que se debía hacer, así que lo hare de acuerdo a mi comprensión*/

    const prompt = require('prompt');
    prompt.start();
    prompt.get(['altura', 'base'], function (err, result) {
        let altura =  Number(result.altura)
        let base = Number(result.base)
        const area = (altura * base);
       

    console.log ("El area del cuadrado es igual a " + area + ' cm')
    
    });