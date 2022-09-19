//Esto es un bloque- Comentario de una linea
/*
Esto 
es 
un 
comentario
de
varias
lineas 
*/

//var global
var hola = "Hola mundo";
//let bloque
let hello = "Hello world";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);
//Ambito de bloque
var musica = "Rock";
console.log("Variable Música antes del bloque",musica);

{
  var musica="Pop";
  console.log("Variable Música dentro del bloque",musica);

}

console.log("Variable Música fuera del bloque",musica);

console.log("************************************");
let musica2 = "Rock";
console.log("Variable Música antes del bloque",musica2);

{
  let musica2="Pop";
  console.log("Variable Música dentro del bloque",musica);

}

console.log("Variable Música fuera del bloque",musica2);