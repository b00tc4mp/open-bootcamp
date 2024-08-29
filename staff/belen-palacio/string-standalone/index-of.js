// La funcion indexOf busca recorrer mi cadena y devolver como resultado
// el indice en el que mi subcadena de string se encuentra dentro de mi cadena.
// lo que devuelve es un número entero que representa el índice de la primera
// aparición del término de búsqueda dentro de la cadena principal.

// me creo una funcion que recorra mi cadena de string, searchTerm y position (opcional).
// luego me creo un for con la condicion de parada de todo el contenido a Xanalizar
// y comparo con mi subcadena.
// debo saber si mi subcadena se encuentra dentro de mi cadena.
// me creo un if que me diga SI mi subcadena se encuentra dentro de mi cadena
// y devuelvo el indice en el cual se encuentra.
// return searchTerm[i] ?

function indexOf(string, searchTerm) {
  for (let i = 0; i < string.length; i++) {
    if (searchTerm === string[i]) {
      return i;
    } 
  }
 
  return -1;
}

{
  const result1 = indexOf("This is a beautiful world", "w");
  console.assert(result1 === "This is a beautiful world".indexOf("w"), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = indexOf("Maybe the world ends tomorrow", "o");
  console.assert(result2 === "Maybe the world ends tomorrow".indexOf("o"), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = indexOf("This is a beautiful world", "beautiful");
  console.assert(result3 === "This is a beautiful world".indexOf("beautiful"), {
    result: result3,
    message: "Test 3 no pasado",
  });

  const result4 = indexOf("This is a beautiful world", "X");
  console.assert(result4 === "This is a beautiful world".indexOf("X"), {
    result: result4,
    message: "Test 4 no pasado",
  });
}

// poner un 3 ej de una que no encuentro

// El método indexOf() de String values busca esta cadena y
// devuelve el índice de la primera aparición de la subcadena especificada.
// Toma una posición de inicio opcional y devuelve la primera aparición
// de la subcadena especificada en un índice mayor o igual al número especificado.

// parametros de entrada searchTeam y posiition (optional)

// mi funcion de cadena de string busca recorrer mi cadena y determinar
// la posicion en la que aparece el contenido de mi subcadena especificada
// En este caso quiero saber cuando aparece la palabra world.
