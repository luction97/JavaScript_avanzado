//Funcion normal

function multiplicar(a,b){
    return a*b;
}

// Función lambda

const multiplicarlambda = (a,b) => a*b;

//Number
var a = 1;
var a = b;

a = 10;






/* TIPOS DE DATOS
- Number
- Boolean
- undefined
- NULL

OBJETOS:

- Object
- Array
- Function
*/

// Number  (primitivo)
var a = 1;
var b = a;

a = 10;
console.log(a);
console.log(b);

// Array
var arrObjeto = [1, 2, 3];
var arr_copia = arrObjeto;



// OBJETOS
// Abstractos: Se crean a partir del tipo Object, que representa un objeto.
// Un objeto es un conjunto de variables (pares clave/valor) asociadas y relacionadas entre si.

/*Casos de uso:

* Creacion de diccionaris (tablas de hash)
* Creacion de listas (arrays)

*/ 

// BOM: Browser Object Model
// Es una estructura de datos de tipo Object, que representa al navegador
// en el que se está ejecutando el código JavaScript. Se accede a través
// del objeto 'window'.

// DOM
// Document Object Model

/*Recibe un parámetro que es el valor
del argumento id. Devuelve un solo elemento.
Devuelve un elemento del DOM.
*/ 
 var elemento = document.getElementById('variableId');
 elemento.innerHTML = "cambio el texto que contiene el id";


 // document.querySelector

/* Recibe un parámetro que es un
selector CSS. Se puede aplicar cualquier
selector CSS. Devuelve un elemento del DOM.*/ 

function cambiaTituloQuerySelector() {
    let titulo2 = document.querySelector(".titulo2");
    titulo2.innerHTML = "Ejecutaste querySelector!"
}


// document.querySelectorAll

/* Sirve para varios elementos HTML
en base a un selector CSS.
*/

/*Recibe un parámetro que es un selector CSS.
Se puede aplicar cualquier selector CSS. Devuelve una
lista de elementos HTML.
*/





