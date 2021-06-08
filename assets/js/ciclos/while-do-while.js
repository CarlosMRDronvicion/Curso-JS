// los ciclos son para repetir el mismo codigo varias veces
//la unica diferencia entre while y do while es que este ultimo por lo menos una vez se va a ejecutar

const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

// while( i < carros.length){
//     console.log( carros[i] );
//     i++; // i= i + 1
// }

//undefined | null | false
console.warn("While");

while( carros[i] ){
    if ( i === 1){
        // break; //para romper en esa posicion
        i++;
         continue;  //aqui continuaria el ciclo de manera continuada sin poder pararla salvo que cerremos todo, para evtar esto le ponemos encima un i++ pero asi el ciclo es 0 , 2 , 3 saltando el 1
    } 
    console.log( carros[i] );
    i++; 
}



console.warn("Do While");
let j = 0;

do{
    console.log( carros[j]);
    j++
}while( carros[j]);

