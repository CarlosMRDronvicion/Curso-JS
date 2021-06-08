//aqui estaremos trabajando con la logica booleana que es una manera para trabajar con valores booleanos

const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}


const regresaFalse = () => {
    console.log("Regresa false");
    return false;
}


console.warn("Not a la negacion");
console.log( true );
console.log( !true ); //false   ! = negacion|contrario
console.log( !false ); //true


console.log( !regresaFalse() ); //regresaTrue


console.warn( "And" ); //true si todos los valores son verdadero
console.log( true && true); //true
console.log( true && false); //false

console.log("=========="); //esto solo es para hacer una diferenciacion con lo de arriba

console.log( regresaFalse() && regresaTrue() ); //el logico booleano and lee y si primero ve que ya es falso ya imprime falso


console.log("===== && =====");
regresaFalse() && regresaTrue(); //aqui ya solo imprime lo falso 
console.log("4 Condiciones ", true && true && true && false); //falso


console.warn("OR"); //para que regrese true por lo menos una condicion tiene que ser true
console.log( true || false);

console.log( regresaTrue() || regresaFalse() );

console.log("4 Condiciones ", true || true || true || false); //true


console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "HolaMundo";
const a2 = "Hola" && "Mundo"; //si hay algun valor false o soyFalso imprime falso
const a3 = soyFalso || " ya no soy falso";
const a4 = soyFalso || soyNull || soyUndefined || " ya no soy falso de nuevo";
const a5 = soyFalso || regresaTrue () || soyUndefined || " ya no soy falso de nuevo" || true;

console.log({a1, a2, a3, a4, a5});


if ( regresaFalse() && regresaTrue() (true || true || true || false) ){
    console.log("hacer algo");
}else{
    console.log("hacer otra cosa");
}