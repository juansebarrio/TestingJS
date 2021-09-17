// prueba comments

/*
multi linea
*/

// VSC SHORTCUT= Comments command + /  -  Multilinea  Option + Shift + A

// console.log("hola desde el archivo js");

/* VARIABLES!!!!!!!!! */

/* 
let variableLET = "soy una variable";
const PI = 3.14;
// las variables let se pueden modificar mas adelante
variableLET = "123";
console.log(variableLET); 
*/

/* suma
let numerouno = 1;
let numerodos = 2;
let numerotres = 3;
let suma = numerouno + numerodos + numerotres;
alert(suma); */

/* promptEdad
let userAge = prompt("Ingresa tu edad");
console.log(userAge); */

/*
nombre y apellido
let nombre = "Juanse";
let apellido = "Barrio";

let numero = 12;
let numeroText = "12";

let nombreComplet = nombre + " " + apellido;
console.log(nombreComplet);  
*/

/* CONDICIONALES!!!!!!!!! 
let condicion;
// if
if (condicion) {
  // se ejecuta si condeicion es true
} else {
  // se ejecuta si condicion es false
}
*/

/*tipo de dato BOOLEANO
let variableTrue = true;
let variableFalse = false; */

// Condicional mayor de edad

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
  console.log("Podes ingresar");
} else {
  console.log("No podes ingresar a esta pagina");
}

// Operadores Logicos

const _user = "juanse";
const _pass = "asdf";

const user = prompt("Ingresa tu usuario");
const pass = prompt("Ingresa tu password");

if (user == _user && pass == _pass) {
  alert("Logueado Correctamente");
} else {
  alert("Datos Incorrectos");
}
