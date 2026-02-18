
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
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//métodos de array

//listas de cosas que vamos a procesar