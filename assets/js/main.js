
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

const edad = Number(prompt('Ingresa tu edad: '))
let esEstudiante = Number(prompt('Eres estudiante?: (responde 1 para Si y 0 para No)'))



console.log(aplicarDscto(edad, esEstudiante))


/* 
Truthy -> Valores que no son necesariamente Booleanos verdaderos pero Js los interpreta como tal
Todo el resto


Falsy -> Valores que no son necesariamente booleanos falsos pero JS los puedes interpretar como tal

false
0
''
NaN
null
undefined

*/ 