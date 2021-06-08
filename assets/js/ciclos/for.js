//para repetir la condicion tantas veces como le indiquemos en el for

const heroes = ["Batman", "Superman", "Mujer maravilla", "Aquaman"];

console.warn("For tradicional");
for( let i = 0 ; i < heroes.length ; i++){ // donde se inicializa la variable ; la condicion del while ;  incrementador
    console.log( heroes[i] );
}


console.warn("For in");

for( let i in heroes){  //esto es casi lo mismo que for tradicional pero mas limpio 
    console.log( heroes[i]);
}

console.warn("For of");

for  ( let heroe of heroes){ //esto es aun mas sencillo que for in y mas facil
    console.log( heroe );
}