// split qué hace?
// Es un método que coge una cadena de carácteres y un separador
// y divide esa cadena usando el separador para devolver
// un array de substrings de las cadenas resultantes.

// paramtros de entrada
// string tipo string
// separator de tipo string o undefined
// limit (opcional) number

// parámetro de salida
// array de strings


// string: 'lunes,martes,miércoles' separator: ','
// ['lunes', 'martes', 'miércoles']

// string: 'lunes,martes,miércoles' separator: 'e'
// ['lun', 's,mart', 's,miércol', 's']

function split(string, separator = 0, limit = Infinity) {
  let result = [];
  let newResult = ""; 

  for (let i = 0; i < string.length; i++) {
    let subString = "";

    
    for (let j = 0; j < separator.length; j++) {
      subString += string[i + j];
    }

    
    if (subString === separator) {   // si subString coincide con separator
      result[result.length] = newResult;  // guardamos newResult en result
      
      newResult = "";  // dejamos newResult para el siguiente array 
      
      i += separator.length - 1;  // el cual tiene que comenzar despues de separator
      
      } else { 
      
      newResult += string[i] // agrego los caracteres a newResult
    
    }

     result[result.length] = newResult; // agrego la nueva cadena de newResult a result 
  }
  

  return result; // devuelvo result 
}

{
  const result1 = split("Angela,26 años", ",");
  console.assert(
    isArrayEqual(result1, ["Angela", "26 años"]), {
    result: result1,
    message: "Test 1 No pasado",
  });
}