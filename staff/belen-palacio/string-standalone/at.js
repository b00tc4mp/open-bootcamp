// mi funcion recorre mi cadena de string y luego que pido que me devuelva
// mediante un index que indica que caracter quiero devolver, me da como resultado
// un caracter de posicion determinada en el index.

// mi funcion devuelve un caracter a partir de un indice que le dimos como parametro. 
// parametro de entrada, index. parametro de salida, caracter. at acepta valores +/- 

// inicializo una funcion con un contenido vacio de string e index. 
// el caracter q devuelvo es el q le indico en el index 

function at(string, index) { // inicializo una funcion con un contenido vacio de string e index. 
    

  if (index === undefined) {
      return string[0]
  }

  return string[index]

}


{

  const result1 = at("volviendo a la vida", 5); // result1 = "e"
  // result1 = "e"
  console.assert(result1 === "volviendo a la vida".at(5), // result1 = "e"
  {
      result: result1,
      message: "Test 1 no pasado"
  });

  {

      const result2 = at("UNODOSTRES");
      // undefined 
      console.assert(result2 === "UNODOSTRES".at(), // result2 = "U"
      {
          result: result2,
          message: "Test 2 no pasado"
      })
  }

}
