/*Si un coche a la venta es un ford fiesta, el descuento es de un 5%. Si el coche a la venta es un ford focus, el descuento es de un 10%. El usuario ingresara el codigo del vehiculo y el programa mostrara el descuento por consola*/
const prompt = require('prompt');
prompt.start();
prompt.get(['carro', ], function (err, result) {
    let carro = (result.carro)
    let no= '';
    
    switch (carro){
        case 'ford fiesta':
            console.log ('El descuento de este carro es de 5%')
            break;
        case 'ford focus':
            console.log ('El descuento de este carro es de 10%');
            break; 
         }
});