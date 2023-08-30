//Defino string con elementos
let peliculas = "Turno de día, 30 noches con mi ex, Bestia, El monte, Top gun maverick, Elvis, Thor: amor y trueno";

//Defino función para retornar película en mayúsculas
function toUpper(miString){
    return miString.toUpperCase();
}

//Convierto el string en array
let arrayPeliculas = peliculas.split(", ")

//Busco el índice del elemento
let indexPeli = arrayPeliculas.indexOf("Thor: amor y trueno");

//Elimino el elemento del array
let peli = arrayPeliculas.splice(indexPeli, 1)

//Pongo el elemento en mayúsculas
let peliMayus = toUpper(peli[0]);

//Agrego el elemento al principio del array
arrayPeliculas.unshift(peliMayus);

//Convierto el array en string, y lo muestro por consola
let stringPeliculas = arrayPeliculas.join(", ");
console.log(stringPeliculas);

//Defino string con elementos
let peliculasAEstrenar = "Counter-Strike, NOP, Vértigo, Nick, Avatar";

//Convierto el string en array
let arrayAEstrenar = peliculasAEstrenar.split(", ")

//Busco el índice del elemento
let indexBuscado = arrayAEstrenar.indexOf("Counter-Strike");

//Elimino el elemento del array
arrayAEstrenar.splice(indexBuscado, 1);

//Convierto el array en string, y lo muestro por consola
let stringAEstrenar = arrayAEstrenar.join(", ");
console.log(stringAEstrenar);

//Defino función para concatenar las estructuras
function concatenacion(string1,string2){
    return string1.concat(", ", string2);
}

//Ejecuto la función y muestro la estructura final por consola
let estructuraFinal = concatenacion(stringPeliculas,stringAEstrenar);
console.log(estructuraFinal);