/**
 * dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//entra en nuestra web para consultar si esta abierto hoy...


const dia = 1;
const horaActual = 8;

let horaApertura;
let mensaje; //esta abierto, esta cerrado, hoy abrimos a las XX

// if( dia === 0 || dia === 6){
// if ( [0, 6].includes(dia)){   //Esta linea es igual que la de arriaba
//     console.log("FIn de semana");
//     horaApertura = 9;
// }else{
//     console.log("Dia de semana");
//     horaApertura = 11;
// } //todo esto se puede reducir en las siguientes lineas
horaApertura = ( [0, 6].includes(dia)) ? 9 : 11; // (si eso se cumple si es un true) es finde y abrimos a las 9 : caso contrario abrimos a las 11


// if ( horaActual >= horaApertura){
//     mensaje = "Esta anierto";
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = ( horaActual >= horaApertura) ? "Está abierto" : `Está cerrado, abrimos a las ${horaApertura}`; //y esto es igual que la linea de arriba

console.log({horaApertura, mensaje});