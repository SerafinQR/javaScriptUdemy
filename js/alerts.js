/*
Tres formas de mandar mensajes a usuarios desde js
son metodos que vienen dentro del objeto window
*/


alert('Hola mundo desde ventana amergente');
//siguiente codigo arroja una ventana emergente para ingresar datos y retornara lo que el usuario ingrese ahi
let miNombre = prompt('¿Cual es tu nombre completo?');

console.log(miNombre);
console.log('***' + miNombre + '***');

const select = confirm('¿ Estas seguro que deseas borrar esto?');

console.log(select);
// console.log(global);



