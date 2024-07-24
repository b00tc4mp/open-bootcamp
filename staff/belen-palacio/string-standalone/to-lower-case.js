// creo una variable llamada result que va a ser la cadena de string a devolver, la inicianizo como string
// vacía luego me hago un for con la condición de parada que sea todo el largo de la cadena que tengo que
// analizar. Después en la primera línea del for me guardo el caracter que voy a analizar en cada vuelta
// en una variable llamda caracter. Después me creo un if en que voy comprobando si el caracter de
// cada vuelta está o no en mayúsculas. si está en minúsculas lo guardo tal cual en mi cadena result
// y si está en mayúsculas lo convierto y lo guardo en minúsculas en mi cadena result.
// Cuando termino el for mando mi result como return de la función.

function toLowerCase(string) {
    let result = "";
    const converter = [
      ["A", "a"],
      ["B", "b"],
      ["C", "c"],
      ["D", "d"],
      ["E", "e"],
      ["F", "f"],
      ["G", "g"],
      ["H", "h"],
      ["I", "i"],
      ["J", "j"],
      ["K", "k"],
      ["L", "l"],
      ["M", "m"],
      ["N", "n"],
      ["O", "o"],
      ["P", "p"],
      ["Q", "q"],
      ["R", "r"],
      ["S", "s"],
      ["T", "t"],
      ["U", "u"],
      ["V", "v"],
      ["W", "w"],
      ["X", "x"],
      ["Y", "y"],
      ["Z", "z"],
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
  
    return result;
  }
  
  {
    const result1 = toLowerCase("¡Me siento bieN, porque eL sofá Es Nuevo!");
    console.assert(
      result1 === "¡Me siento bieN, porque eL sofá Es Nuevo!".toLowerCase(),
      {
        result: result1,
        message: "Test 1 no pasado",
      }
    );
  
    const result2 = toLowerCase("12344ABCDeee");
    console.assert(result2 === "12344ABCDeee".toLowerCase(), {
      result: result2,
      message: "Test 2 no pasado",
    });
  
    const result3 = toLowerCase("null vaLue");
    console.assert(result3 === "null vaLue".toLowerCase(), {
      result: result3,
      message: "Test 3 no pasado",
    });
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Tengo que te pone todo lo que escribas en minúscula, entonces tengo que
  // un modo para utilizar un a función en donde... puedo usar el toLowerCase
  // y pasen mis resultados, undefined, mis resultados.
  // Tengo que scar las mayusculas,
  
  // crear una funcion que devuelva mi resultado con todas las letras en lower case
  // luego de que analice cada letra y la que están en mayusculas las corrija a minúscula
  
  // Mi función que pasa una cadena de caracteres a lower case lo que hace es recorrer
  // toda la cadena de caracteres, caracter a caracter (uno a uno) y comprobar si está
  // en caracter en mayuscula o minúscula, en caso de que esté en mayuscula lo convierto en
  // minúscula. Finalmente devuelvo mi cadena de caracteres con todos en minuscula.
  
  // creo una variable llamada result que va a ser la cadena de string a devolver, la inicianizo vacía
  // luego me hago un for con la condición de parada que sea todo el largo de la cadena que tengo que
  // analizar. Después en la primera línea del for me guardo el caracter que voy a analizar en cada vuelta
  // en una variable llamda caracter. Después me creo un if en que voy comprobando si el caracter de
  // cada vuelta está o no en mayúsculas. si está en minúsculas lo guardo tal cual en mi cadena result
  // y si está en mayúsculas lo convierto y lo guardo en minúsculas en mi cadena result.
  // Cuando termino el for mando mi result como return de la función.