
console.log('Hola, estoy aprendiendo TypeScript');

//Declaración de variables
//var let y const para definir variables
var nombre: string = 'Francy'; //variable global

var apellido: string = 'Hernandez';



console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`¿Cómo ha ido el techcamp, ${nombre} ?`);

let email: string = "fran_ymile@hotmail.com"; //variable local
console.log(`El email de ${nombre} es ${email}`);

const PI: number = 3.1416 //Constante en mayúsculas

var apellidos: any = 'Corredor' // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 12;

var error : boolean;
error = false;

console.log(`¿Hay error? ${error}`);


//Instanciación múñltiple de variables

let a: string, b: boolean, c: number;

a = 'Typescript';
b = true;
c= 15;

//valores primitivos: BuiltIn Typres: number, string, boolean, void, null y undefined

// Tipos más complejos: Listas, enumerados, interfaces

// Lista de cadena de texto
let listaTareas: string[] = ['Tarea 1', 'Tarea 2'];

//Combinación de tipos en listas
let valores: (string | number | boolean | undefined)[] = [false, 'Hola', true, 30, undefined]

//Enumerados

enum Estados {
    'Completo' = 'C',
    'Incompleto' = 'I',
    'Pendiente' = 'P'
}

enum PuestoCarrera {
    'Primero' = 1,
    'Segundo',
    'Tercero'
}

let estadoTarea: Estados = Estados.Completo;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;


//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: 'Tarea1',
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)

//Podemos crear Types de Typescript, se usan para definir un tipo mas complejo, tienen que ver con tipos de datos primitivos que quieres potenciar o ampliar
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: 'Audi',
    precio: 50000,
    anio: 2010
}

// Condicionales


//Operador ternario
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);


// If - else 
if(error){
    console.log('Hay un error');
}else{
    console.log('No hay un error');
}

// If - else if - else

if(coche.anio < 2010){
    console.log(`El coche ${coche.nombre} es viejo`)
}else if(coche.anio === 2010){
    console.log(`El coche ${coche.nombre} es del 2010`)
}else{
    console.log(`El coche ${coche.nombre} es nuevo`)
}

// Switch

switch (tarea1.estado) {
    case Estados.Completo:
        console.log('la tarea está completa')
        break;
    case Estados.Incompleto:
        console.log('La tarea aún no está completa')
        break;
    case Estados.Pendiente:
        console.log('La tarea está pendiente de verificar')
        break;
    default:
        break;
}

// Bucles

let listaTareasNueva: Tarea [] = [
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
]

//for clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`)
}

//forEach
listaTareasNueva.forEach((
    tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`)
    }
);

//forIn => utiles en cadenas de texto y objetos


//Bucles While

while (tarea1.estado !== Estados.Completo) {
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completo;
        break;
    }else{
        tarea1.urgencia ++;
    }
}

//Bucle Do While se ejecuta al menos 1 vez

do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completo;
} while (tarea1.estado !== Estados.Completo);


