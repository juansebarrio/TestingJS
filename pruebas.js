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

/*  
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
*/

/* ciclo for
// i++ == i + i+1;
// inicio; fin (condicion de fin); paso
for (let i = 0; i < 10; i++) {
  // console.log("Hola Coder!");
  console.log("Iteracion nro: " + i);
}
*/

// Tabla del 7

// for (let i = 0; i <= 10; i++) {
//   console.log("tabla del 7");
//   // console.log("7x" + i + "= " + 7*i);
//   console.log(`7x${i} = ${7 * i}`);
// }

/* Ciclo WHILE */
// let i = 0;

// let menu = Number(prompt(
// 	` Ingresa una de las siguientes opciones

// 1 - Sumar
// 2 - Restar
// 3 - Multiplicar
// 4 - Dividir

// 0 - Finalizar programa

// `));
// // menu = 0;
// while (menu != 0) {

// 	switch (menu) {
// 		case 1:
// 			let x = Number(prompt("Ingrese el primer nro a sumar"));
// 			let y = Number(prompt("Ingrese el segundo nro a sumar"));
// 			alert(`El resultado de ${x} + ${y} = ${x + y}`);
// 			menu = Number(prompt(
// 				` Desea realizar otra operacion?:

// 			1 - Sumar
// 			2 - Restar
// 			3 - Multiplicar
// 			4 - Dividir

// 			0 - Finalizar programa

// 			`));
// 			break;
// 		case 2:
// 			alert("RESTAR");
// 			menu = Number(prompt(
// 				` Desea realizar otra operacion?:

// 			1 - Sumar
// 			2 - Restar
// 			3 - Multiplicar
// 			4 - Dividir

// 			0 - Finalizar programa

// 			`));
// 			break;
// 		case 3:
// 			alert("MULTIPLICAR");
// 			menu = Number(prompt(
// 				` Desea realizar otra operacion?:

// 			1 - Sumar
// 			2 - Restar
// 			3 - Multiplicar
// 			4 - Dividir

// 			0 - Finalizar programa

// 			`));
// 			break;
// 		case 4:
// 			alert("DIVIDIR");
// 			menu = Number(prompt(
// 				` Desea realizar otra operacion?:

// 			1 - Sumar
// 			2 - Restar
// 			3 - Multiplicar
// 			4 - Dividir

// 			0 - Finalizar programa

// 			`));
// 			break;
// 		default:
// 			menu = Number(prompt(
// 				` La opción ingresada es incorrecta:

// 			1 - Sumar
// 			2 - Restar
// 			3 - Multiplicar
// 			4 - Dividir

// 			0 - Finalizar programa

// 			`));
// 			break;
// 	}
// }
// alert("Programa finalizado");

/* Ciclo DO-WHILE */

/* 
let menu;
do {
	let x, y;
	menu = Number(prompt(
		` Ingresa una de las siguientes opciones
	
	1 - Sumar
	2 - Restar
	3 - Multiplicar
	4 - Dividir
	
	0 - Finalizar programa
	
	`));
	switch (menu) {
		case 1:
			x = Number(prompt("Ingrese el primer nro a sumar"));
			y = Number(prompt("Ingrese el segundo nro a sumar"));
			alert(`El resultado de ${x} + ${y} = ${x + y}`);

			break;
		case 2:
			x = Number(prompt("Ingrese el primer nro a restar"));
			y = Number(prompt("Ingrese el segundo nro a restar"));
			alert(`El resultado de ${x} - ${y} = ${x - y}`);

			break;
		case 3:
			alert("MULTIPLICAR");

			break;
		case 4:
			alert("DIVIDIR");

			break;
		default:
			break;
	}
} while (menu != 0)
alert("Programa finalizado");
 */

/* Ejemplo Estructura DO WHILE */
const ganador = Math.floor(Math.random() * 100);
console.log(ganador);
let fallas = 0;
let numero;
do {
  do {
    numero = Number(prompt("Ingrese un valor entre 1 y 100"));
  } while (numero < 1 || numero > 100);

  if (numero == ganador) {
    alert("Ganaste!");
  } else if (numero < ganador) {
    alert("El numero es mas grande!");
    fallas++;
  } else {
    alert("El numero es mas chico!");
    fallas++;
  }
} while (numero != ganador && fallas < 5);

if (numero != ganador) {
  alert(`Game Over: Tuviste ${fallas} fallas`);
}
