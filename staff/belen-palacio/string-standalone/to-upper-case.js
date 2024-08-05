// crear una variable llamada result que va a ser la cadena de string a devolver
// luego me creo un for con la condicion de parada de todo el contenido a analizar 
// y comparo. Despues de la primer linea del for me guardo el caracter que voy a analizar
// en cada vuelta, y lo voy a llamar const character = string[i] 
// Luego me creo un if en donde voy a analizar si los caracteres de cada vuelta estan en mayuscula, y si es asi
// los guardo como estan en mi cadena result y si no, los convierto y los guardo en mi cadena result
// Por ultimo mando mi result como return de la funcion. 


// Miro variables y scopes en el debugger

function toUpperCase (string){
  let result = "";
  const converter = [
  ["a", "A"],
  ["á", "Á"],
  ["b", "B"],
  ["c", "C"],
  ["d", "D"],
  ["e", "E"],
  ["f", "F"],
  ["g", "G"],
  ["h", "H"],
  ["i", "I"],
  ["j", "J"],
  ["k", "K"],
  ["l", "L"],
  ["m", "M"],
  ["n", "N"],
  ["o", "O"],
  ["p", "P"],
  ["q", "Q"],
  ["r", "R"],
  ["s", "S"],
  ["t", "T"],
  ["u", "U"],
  ["v", "V"],
  ["w", "W"],
  ["x", "X"],
  ["y", "Y"],
  ["z", "Z"]
];

for (let i = 0; i < string.length; i++) {
  const character = string[i];

  for (let j = 0; j < converter.length; j++) {
    const value = converter[j];
    if (character === value[0]) {
      result += value[1];
    }
  }
  if (result.length !== i + 1) {
    result += character;
  }
} 
          
return result
}

{

const result1 = toUpperCase("¡Me siento bieN, porque eL sofá Es Nuevo!")
console.assert(result1 === "¡Me siento bieN, porque eL sofá Es Nuevo!".toUpperCase(),
  {
      result: result1,
      message: 'Test 1 no pasado',
  }
  );
  
const result2 = toUpperCase("12344ABCDeee")
console.assert(result2 === "12344ABCDeee".toUpperCase(),
  {
      result: result2,
      message: 'Test 2 no pasado',
  }
  );

const result3 = toUpperCase("null vaLue")
console.assert(result3 === "null vaLue".toUpperCase(),
  {
      result: result3,
      message: 'Test 3 no pasado',
  }
  );

}

//////////////////////////////////////////////////////////////////////////////////////

// desarrollar una funcion que me luego de analizar el contenido de mis palabras,
// me detecte lo que tengo escrito y me devuelva el contenido en mayusculas

// desarrollar una funcion que que duevuelva mi resultado habiendo analizado y posteriormente
// cambiado mis letras en minuscula a todas las letras en UpperCase

// mi funcion tiene el objetivo de devolverme caracteres en UpperCase,
// para ello, me recorre mis caracteres y me compara uno por uno si esta en mayusculas o minusculas
// y luego, los que estan en minusculas, me los devuelve en mayusculas

// crear una variable llamada result que va a ser la cadena de string a devolver
// luego me creo un for con la condicion de parada de todo el contenido a analizar 
// y comparo. Despues de la primer linea del for me guardo el caracter que voy a analizar
// en cada vuelta, y lo voy a llamar const character = string[i] 
// Luego me creo un if en donde voy a analizar si los caracteres de cada vuelta estan en mayuscula, y si es asi
// los guardo como estan en mi cadena result y si no, los convierto y los guardo en mi cadena result
// Por ultimo mando mi result como return de la funcion. 