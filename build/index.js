"use strict";
console.log('Hola, estoy aprendiendo TypeScript');
//Declaración de variables
//var let y const para definir variables
var nombre = 'Francy'; //variable global
console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`¿Cómo ha ido las vacaciones, ${nombre} ?`);
let email = "fran_ymile@hotmail.com"; //variable local
console.log(`El email de ${nombre} es ${email}`);
const PI = 3.1416; //Constante en mayúsculas
var apellidos = 'Corredor'; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 12;
var error;
error = false;
console.log(`¿Hay error? ${error}`);
//Instanciación múñltiple de variables
let a, b, c;
a = 'Typescript';
b = true;
c = 15;
//valores primitivos: BuiltIn Typres: number, string, boolean, void, null y undefined
// Tipos más complejos: Listas, enumerados, interfaces
// Lista de cadena de texto
let listaTareas = ['Tarea 1', 'Tarea 2'];
//Combinación de tipos en listas
let valores = [false, 'Hola', true, 30, undefined];
//Enumerados
var Estados;
(function (Estados) {
    Estados["Completo"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completo;
let puestoMaraton = PuestoCarrera.Segundo;
//podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: 'Tarea1',
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
let coche = {
    nombre: 'Audi',
    precio: 50000,
    anio: 2010
};
// Condicionales
//Operador ternario
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If - else 
if (error) {
    console.log('Hay un error');
}
else {
    console.log('No hay un error');
}
// If - else if - else
if (coche.anio < 2010) {
    console.log(`El coche ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`El coche ${coche.nombre} es del 2010`);
}
else {
    console.log(`El coche ${coche.nombre} es nuevo`);
}
// Switch
switch (tarea1.estado) {
    case Estados.Completo:
        console.log('la tarea está completa');
        break;
    case Estados.Incompleto:
        console.log('La tarea aún no está completa');
        break;
    case Estados.Pendiente:
        console.log('La tarea está pendiente de verificar');
        break;
    default:
        break;
}
// Bucles
let listaTareasNueva = [
    {
        nombre: 'Tarea1',
        estado: Estados.Completo,
        urgencia: 2
    },
    {
        nombre: 'Tarea2',
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: 'Tarea3',
        estado: Estados.Completo,
        urgencia: 15
    }
];
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
