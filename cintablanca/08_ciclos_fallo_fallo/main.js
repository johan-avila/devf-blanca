// este ciclo empieza desde el "0" y termina en "10"
// for (let i = 0; i <= 10; i = i + 1) {
// console.log(i)
// }



// for (let i = 0; i <= 40; ++i) {
// console.log(i)



// challenge
// 3 ciclos
// [5,250] i++
//  [99,-99] de 3
// [-15,25] 5 en 5

// for (let i = 5; i <= 250; i++) {
//     console.log(i)
// }

// for (let i = 99 ; i >= -99 ; i = i - 3) {
//     console.log(i)
// }

// for (let i = -15 ; i <= 25; i= i + 5) {
//     console.log(i)
// }

// ------------------------challenge----------------
// imprimir nimeros del 1 al 100
// 1
// 2
// 3 fizz
// 4
// 5buzz
// 6
// .
// .
// 15FizzBuzz

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + "FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log(i + "fizz")
//     } else if ( i % 5 === 0 ){
//         console.log ( i + "buzz")
//     } else {console.log (i) }
// }


// // --------------------------------------------------------------------------------
// // let i = Number (prompt("tu numero"))
// let empieza = Number (prompt ("donde empieza tu conjunto"))
// let termina = Number (prompt ( "donde termina") )
// let decuanto = Number ( prompt ("de cuanto en cuanto"))
// // let tunumero = Number (prompt ("dame tu numero") )

// for( let i= empieza; i <= termina ; i = i + decuanto ){  
//     if (i % 2 === 0 && i % 5 ===0 ){

//     } else if ( i %  2 === 0) {

//     } else if ( i% 5 === 0 ){

//     } else (i)
// }






// ---------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------}
// let numero = prompt("elige un numero");

// if (numero % 2 === 0) {
//     console.log("el numero" + numero + "es par.")
// }
// else {
//     console.log("el numero" + numero + "es impar")
// }

// let inicio = Number(prompt("ingresa el numero inicial"));

// console.log("la variable inicio es de tipo" + (inicio));

// let final = Number(prompt("en que numero termina"));

// console.log("la variable final es de tipo"  (inicio));

// let sucesion = Number(prompt("de cuanto en cuanto"));

// console.log("la variable sucesion es de tipo" + (inicio));
for (let i = inicio; i <= final; i = i + sucesion) {
    
    console.log (i)
         if (i% 3 === 0 && i% 5 === 0) {
             console.log (i + "FizzBuzz")
         } else if (i% 5 === 0) {
             console.log (i + "Buzz")
         } else if (i% 3 === 0) {
             console.log (i + "Fizz")
         } else {
             console.log (i)
         }
    }