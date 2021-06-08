

let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo: ", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length -1]; //esto es para mostrar el ultimo de la lista si no sabemo cuantos hay

console.log( primero, ultimo);

juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr})        //esto es para ver el elemento, posicion y cuantos arrays hay
}  );  

let nuevaLongitud = juegos.push("F-Zero");  //esto es para añadir un array al final del arreglo
console.log( {nuevaLongitud, juegos} );

nuevaLongitud = juegos.unshift("GTA");    //esto es para añadir un array al principio del arreglo
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();                //borrar el ultimo elemento
console.log({juegoBorrado, juegos});


let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);   //aqui empezamos en la posicion 1 porque lo definimos en let pos y borramos dos arrays por lo tanto desaparecieron dos
console.log( {juegosBorrados, juegos } );

let metroidIndex = juegos.indexOf("Metroid"); //CaSeSeNsItIvE
console.log( {metroidIndex});


//pasar valores por REFERENCIA
