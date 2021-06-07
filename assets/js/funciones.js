

function saludar( nombre/*argumento*/ ){  //funcion es para defeinir un procedimiento y despues utilizarlo varias veces
    // console.log( arguments ); //aqui imprime todos los argumentos definidos abajo en saludar
    // console.log("Hola " + nombre);
    return 10;

    //esto nunca se va a ejecutar por el return 
    console.log("Hola Mundo");
}



const saludar2 = function ( nombre ){  //aqui lo asignamos a una constante la funcion porque asi no podemos utilizarlo mas alante
    console.log("Hola: " + nombre);
}

const saludarFlecha = () => {
    console.log("Hola Flecha");
}
const saludarFlecha2 = ( nombre ) => {
    console.log("Hola " + nombre);
}


//saludar("Carlos", 40, true, "Costa Rica");
const retornoDeSaludar = saludar("Carlos", 40, true, "Costa Rica"); //1


// saludar2("Carlos");
// saludarFlecha();
// saludarFlecha2("Melina");


function sumar(a, b){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }   la siguiente linea es un resumen de esta const flecha

const sumar2 = (a,b) =>  a + b;


function getAleatorio(){
    return Math.random();
}

//transformar el anterior function en funcion de flecha como getAleatorio2()

const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );
