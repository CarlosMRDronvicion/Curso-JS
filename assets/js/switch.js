//cuando tenemos valor exactos y específicos usamos el === para calcular el valor y el tipo de dato(switch) que sustituye al if 


const dia = 2;


switch( dia ){
    case 0:
        console.log("Domingo");
        break; //esto es porque queremos que ejecute el numero que le indicamos en el const pero solo ese numero, por eso el break para cuando ejecute ese solo ese y no siga leyendo par abajo   como hace normalmente JS
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:  //esto es para cuando no cumple ninguna de las condiciones anteriores
        console.log("no es lunes, martes o domingo");
}

