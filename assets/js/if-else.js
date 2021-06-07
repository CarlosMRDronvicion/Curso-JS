

let a = 1;

if( a >= 10 ){
    console.log("A es mayor o igual que 10");
} else {
    console.log("A  es menor que 10");
}



// console.log("Fin de programa");

const hoy = new Date();  //{}  Date = a la fecha de hoy
let dia = hoy.getDay();  //0: domingo, 1: lunes...



console.log( dia );


if ( dia === 0){  //aqui ponemos tres = porque estamos haciendo una condicion de un booleano
    console.log("Domingo");
}else if( dia === 1){
        console.log("lunes");
}else if ( dia === 2){
    console.log("Martes");
}else{
    console.log("No es lunes, martes o domingo...");
}
