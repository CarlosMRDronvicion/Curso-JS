
// function crearPersona( nombre, apellido ){
//     return{ nombre, apellido  }              // antes estaba nombre: nombre pero lo simplificamos 
// }


const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });      //esto es lo mismo que arriba       


const persona = crearPersona("Carlos", "Méndez");
console.log( persona);




function imprimeArgumentos(){
    console.log( arguments );
}
const imprimeArgumentos2 = ( ...args ) => {   //esto es lo mismo que el de encima, con los tres puntos antes de args es para definir todos los elementos de abajo 
    // console.log( args );
    return args;
}

const [  casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, "Carlos", "Hola");
console.log({casado, vivo, nombre, saludo});


const { apellido: nuevoApellido } = crearPersona("Carlos", "Méndez");
console.log( {nuevoApellido});



const tony = {
    nombre: "Tony Stark",
    codeName: "Iron Man",
    vivo: false,
    edad: 40,
    trajes: ["Mark 1", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = ( personaje ) =>{
//     console.log( "nombre", personaje.nombre);
//     console.log( "codeName", personaje.codeName);
//     console.log( "vivo", personaje.vivo);
//     console.log( "edad", personaje.edad);
//     console.log( "trajes", personaje.trajes);
// }

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) =>{


    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );

