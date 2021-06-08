

const elMayor = (a, b) => ( a > b) ? a: b;

const tieneMembresia = ( miembro ) => (miembro) ? "2€" : "10€";

console.log( elMayor(20, 15));
console.log( tieneMembresia(false));

//esto es bueno para generar tambien cuando se quiere generar arreglos o objetos dentro de una operacion implicita dentro de la orden

const amigo = false;
const amigosArr = [
    "peter",
    "Tony",
    "Dr. Jhon",
    amigo ? "Thor" : "Loki", //si amigo es true imprime thor si no loki
    elMayor(10, 15),
];

console.log( amigosArr );


// otro uso puede ser cuando hay mas de dos condiciones en una misma constante

const nota = 72; //A+ A B+
const grado = nota >= 95 ? "A+" :
                nota >= 90 ? "A" :
                nota >= 85 ? "B+" :
                nota >= 80 ? "B" :
                nota >= 75 ? "C+" :
                nota >= 70 ? "C" : "F";

console.log({nota, grado});