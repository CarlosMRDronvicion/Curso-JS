let personaje = {
    nombre: "Carlos Mendez",
    codeName: "Harry Potter",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark 1", "Mark V", "Hulkbuster"],
    direccion:{
        zip: "10880, 90265",
        ubicacion: "Malibu, California",
    },
    "ultima pelicula": "Infinity War"
};

console.log("Datos: ", personaje);
console.log("Nombre: ", personaje.nombre);
console.log("Nombre: ", personaje["nombre"]);
console.log("Edad: ", personaje.edad);

console.log("Coordenadas: ", personaje.coords);
console.log("Lat: ", personaje.coords.lat);

console.log("Número de Trajes: ", personaje.trajes.length);
console.log("último Traje: ", personaje.trajes[personaje.trajes.length -1]);  //esto es para indicar el ultimo traje de del personaje objeto 

const x =  "vivo";
console.log("Vivo", personaje[x]);  //aqui es que x va regresar al objeto vivo de false arriba y imprime el valor


console.log("Ultima pelicula", personaje["ultima pelicula"]); //añadir ultima pelicula creado al final 


//+ detalles

delete personaje.edad; //Borrar propiedad
console.log(personaje);


personaje.casado = true; //crear nueva propiedad en el objeto



const entriesPares = Object.entries(personaje); //aqui convertimos ls objetos en arrays
console.log( entriesPares);


Object.freeze( personaje );  //esto es para modificar las propiedades del objeto
personaje.dinero = 1000000;
personaje.casado = false;  //en estas dos lineas no cambia porque esta congelado las propiedades del objeto
personaje.direccion.ubicacion= "Costa rica";  //en cambio aqui si que se puede modificar porque es una propiedad dentro de una propiedad
console.log(personaje);


const propiedades = Object.getOwnPropertyNames( personaje );  //esto es para darle posiciones a los objetos en forma de array
const valores = Object.values( personaje); //aqui damos valores a los arrays de los objetos anteriores
console.log({propiedades, valores });