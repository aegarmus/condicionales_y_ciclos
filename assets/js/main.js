
// Aplicar descuento
 
/* 
Crear una función que evalue si una persona tiene o no dscto
El dscto se aplica si es estudiante o mayor de 65 años
Si la persona es menor de 12 años entra gratis
De no cumplir ninguna condición no obtiene dscto
*/


const aplicarDscto = (edad, esEstudiante) => {

    // Guard Condition -> Condición de guarda

    //El reutnr me saca de la función por devolver algo
    if(!(esEstudiante >=0 && esEstudiante <=1)) return 'Verificación estudiantil inválida'
    if(isNaN(edad) || edad < 0) return "Edad Invalida";

    if (edad <= 12) return "Felcidades, puedes entrar gratis!";
    if (esEstudiante || edad >= 65) return "Felicidades, tienes un 25% de dscto";
    return "Precio normal, no tienes dscto";
}
/* 
const edad = Number(prompt('Ingresa tu edad: '))
let esEstudiante = Number(prompt('Eres estudiante?: (responde 1 para Si y 0 para No)'))

console.log(aplicarDscto(edad, esEstudiante))
 */

//Operador Ternario -> Sugar Sintax del if else, OJO solo usar con condiciones simples (true o false)

const esPar = (num) => {
    /* if(num % 2 === 0) {
        return 'Es par'
    } else {
        return 'Es impar'
    } */

    /* condicion ? lo que pasa si es true : lo que pasa si es false */

    num % 2 === 0 ? 'es par' : 'es impar'
}


// Switch Case -> Tipo de condicional que funciona como interruptor



const crearMensajeEstacion = (estacion) => {
    
    switch(estacion.toLocaleLowerCase()) {
        case 'verano':
            return('El sol me derrite y consume! D:') // return devuelve el dato y es el ultimo en el bloque de código
            
        case 'otoño':
            return('Que lindos colores')
            
        case 'invierno':
            return('Me congelo')
                    
        case 'primavera':
            return('Los pajaritos cantan')
                        
        default:
            return('Escoge una estación valida')
    }
}
                    
/* const estacion = prompt('Elige una estación del año: ')
console.log(crearMensajeEstacion(estacion))
                     */
                    /* 
Truthy -> Valore s que no son necesariamente Booleanos verdaderos pero Js los interpreta como tal
Todo el resto


Falsy -> Valores que no son necesariamente booleanos falsos pero JS los puedes interpretar como tal

false
0
''
NaN
null
undefined

*/ 

// Ciclos -> Estructura de código que se repite a si mismo bajo ciertas condiciones

// Ciclo For

/*

for (variableInicializadora; condicion; incremento) {
    el código a repetir
} 
    
*/
            //11   11<=10      2 + 1 = 3
/* for (let i = 1; i <= 10; i++) {
    console.log(i)
}
 */
/* FizzBuzz -> 
    tienes que imprimir números del 1 al 100
    si el número es multiplo de 3 imprimir Fizz
    Si el número es multiplo de 5 imprimir buzz
    Si el numero multiplo de 3 y 5 imprimir fizzBuzz

 */ 


/* for (let i=1; i <= 100; i++) {

    if(i % 15 === 0) {
        console.log('FizzBuzz')
    } else if ( i % 3 === 0 ) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
} */


// Dscto a Carrito de compra

/* 
Tenemos un carrito de compra, en esta tienda se aplican dsctos por tramos de precios

total de compra es superior o igual a 50000 -> 10%
total de compra es suprerior o igual a 30000 -> 5%
si no esta en esos rangos no hay descuento

*/


const formatCurrency = (amount, countryFormat, currency) => {
    return new Intl.NumberFormat(countryFormat, {
        style: 'currency',
        currency: currency
    }).format(amount) // es-ES es-CL en-US
}

const COUNTRY_FORMAT = 'en-US'
const CURRENCY = 'USD'


const preciosCarrito = [12990, 8990, 15990, 4990,2990, 10990]
let totalAcumulado = 0


for(let i=0; i < preciosCarrito.length; i++) {
    totalAcumulado = totalAcumulado + preciosCarrito[i]
} 


let descuento = 0

if (totalAcumulado >= 50000) descuento = 0.1
else if (totalAcumulado >=30000) descuento = 0.05;

const totalFinal = Math.round(totalAcumulado * (1 - descuento))

console.log(`Precio total de compra ${formatCurrency(totalAcumulado, COUNTRY_FORMAT, CURRENCY)}, se aplica descuento de ${descuento * 100}%`)
console.log(
    `Total a pagar: ${formatCurrency(totalFinal, COUNTRY_FORMAT, CURRENCY)}`,
);






//métodos de array

//listas de cosas que vamos a procesar