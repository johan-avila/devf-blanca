// // ----------------- Funciones ------()

// // ------------------------- typeof ()



// // ECMA / arrow functions
// let mult = (num1=0 , num2=0 , num3=0) => {
//     console.log ("el resultado de la multiplicacion es:" + num1* num2* num3)
// }

// mult (1,3,4);
// mult (2,5,6);
// mult ();
// // --------Funcion anonima cuando no hay nada dentro de los parentesis
// let saludo = ( usuario = "invitado"  ) => {
//  console.log ("bienvenido/a" + " " + usuario )
// }

// saludo("Osvaldo");

// saludo ();

// // -------------------------------------------------------------------

// let suma = (num1=0 , num2=0 , num3=0) => {
//     console.log ("el resultado de la multiplicacion es:" + num1+ num2+ num3)
// }

// suma (1,3,4);
// suma (2,5,6);
// suma  ();

// -----------------Puedes evitar que una variable se redefina sustiuyendo "LET" con "CONST"

// crear una funcion que calcule el area de un triangilo cualquiera---------- b*a/2

const areaTriangiulo = (base = 0, altura = 0 ) => {
    prompt ()
    let area = base * altura/2
    console.log("Tu area es:" + " " + area)
}

areaTriangiulo(3, 5)



// let base =  prompt("inserta tu base")
// let ladoizq = prompt("inserta el lado izquierdo")
// let ladoder = prompt("inserta tu lado derecho")
// let arriba = prompt("inserta tu lado de arriva ")

let suma = (base = 0, ladoizq = 0, ladoder = 0, arriba = 0) => {
    console.log("Tu perimetro es:" + " " + (base + ladoizq + ladoder + arriba))
}


suma()

// crear una funcion que calcule el perimetro de cuadrilatero cualquiera l+l+l+l=