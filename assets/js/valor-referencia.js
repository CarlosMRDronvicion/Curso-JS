
let a = 10;
let b = a;
a = 30;

console.log({a, b});


let juan = { nombre: "Juan"};
let ana = { ...juan}; //aqui los puntos sirven para separar los elementos
ana.nombre = "Ana";

console.log({juan, ana});


const cambiaNombre = ( { ...persona} ) => {
    persona.nombre = "Tony";
    return persona;
}

let peter = { nombre: "Peter"};
let tony = cambiaNombre( peter);

console.log({ peter, tony });


//ARRAYS
const frutas = ["Manzana", "Pera", "Piña"];

// usaremos slice y spread (y tiene que ir en el orde dde slice y spread despues) para revisar el rendimiento de JS en clases, la que menos tarde es la que usaremos
console.time("slice");
// const otrasFrutas = [...frutas];   esta linea y la de abajo es lo mismo 
const otrasFrutas = [...frutas]; 
console.timeEnd("slice")


console.time("spread");
const otrasFrutas2 = frutas.slice(); 
console.timeEnd("spread")

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas});