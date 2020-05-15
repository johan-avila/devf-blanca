// alert ("hola")

// -----Array---
let personas = ["osvaldo", "Ricardo", "elichi", "yael", "pepe"];

console.log(personas); -

console.log(personas[4]);

personas[6] = "Raul"
console.log(personas);

// ------------.push()---------------------------------

personas.push("eduardo")
personas.push("david")

let colores = ["rojo", "azul", "rosa"]
colores.push("verde", "cafe", "morado")
console.log(colores);

//  ---------------.pop()-----
personas.pop();
colores.pop();

// -------------.splice()-----
colores.splice(0, 1)
console.log("Una persona llamada " + personas[3] + "usa una playera color" + colores[1]);