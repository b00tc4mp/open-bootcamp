// El método repeat() de String values construye y devuelve una nueva cadena 
// que contiene la cantidad especificada de copias de esta cadena, 
// concatenadas entre sí.

// me creo una funcion que recorra mi cadena de string y construya una nueva cadena 
// en base a la cantidad de veces que debe copiarla. 

// me creo una funcion repeat (string y count), creo una variable
// result vacia. me creo un for que recorra mi count. 
// devuelvo como resultado += string. por ultimo return result


function repeat(string, count) {
    let result = ''
  
       for (let i = 0; i < count; i++) {
          result += string;
    }
  
      return result
  }
  
  {
    const result1 = repeat("b", 3);
    console.assert(
      result1 === "b".repeat(3),
      {
        result: result1,
        message: "Test 1 no pasado",
      }
    );
  
    const result2 = repeat("nose", 2);
    console.assert(
      result2 === "nose".repeat(2),
      {
        result: result2,
        message: "Test 2 no pasado",
      }
    );
  }

// mi funcion que simula el metodo de string repeat original
// el ej se ha resuelto TDD 
// los test explicados, como se comporta, como deberia y lo q pasa si si o si no 
// por ultimo definir el esquema o funcion 
// parametro de entrada de salida 

// concatenar 
// count numero de vueltas 