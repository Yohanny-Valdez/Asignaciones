/* 1.	Solicitar una calificacion (número) por consola y muestra la calificación según la nota:
•	0-3: Muy deficiente
•	3-5: Insuficiente
•	5-6: Suficiente
•	6-7: Bien
•	7-9: Notable
•	9-10: Sobresaliente
*/

const prompt = require ('prompt');
prompt.start();



prompt.get(['calificacion'], function(err, result){
    let calificacion = result.calificacion;

    if (calificacion > 0 && calificacion <= 3  ){
        console.log( 'muy deficiente');
    } 
    else if (calificacion > 3 && calificacion <= 5){
        console.log('Insuficiente')
    }
    else if (calificacion > 5 && calificacion <= 6){
        console.log('suficiente')
    }
    else if (calificacion > 6 && calificacion < 7){
        console.log('bien')
    }
    else if (calificacion >= 7 && calificacion < 9){
        console.log('notable')
    }
    else if (calificacion >= 9 && calificacion <= 10){
        console.log('sobresaliente')
    }
});




