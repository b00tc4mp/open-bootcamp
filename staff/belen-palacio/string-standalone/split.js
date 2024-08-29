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

    if (subString === separator && result.length < limit ) {   // si subString coincide con separator ANTES del limite 
      result[result.length] = newResult;  // guardamos newResult en result
      newResult = "";  // dejamos newResult para el siguiente array 
      i += separator.length - 1;  // el cual tiene que comenzar despues de separator
      
      } else { 
      newResult += string[i] // agrego los caracteres a newResult
    
    }
  }
  if(!(limit === result.length)) result[result.length] = newResult;
  

  return result; // devuelvo result 
}


{
  const result1 = split("Angela,26 años", ",");
  function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let result = true;
  let i = 0;
  while (i < arr1.length || result === false) {
    if (arr1[i] !== arr2[i]) result = false;
    i++;
  }
  return result;
}
  console.assert(
    isArrayEqual(result1, ["Angela", "26 años"]), {
    result: result1,
    message: "Test 1 No pasado",
  });

const result2 = split("Monday,Tuesday,Wednesday,Thursday", ",");
  console.assert(
    isArrayEqual(result2, ["Monday", "Tuesday", "Wednesday", "Thursday"]),
    {
      result: result2,
      message: "Test 2 No pasado",
    }
  );  

  const result3 = split("Monday,Tuesday,Wednesday,Thursday", ",", 2);  // ["Monday", "Tuesday", "Wednesday,Thursday"]
  console.assert(isArrayEqual(result3, ["Monday", "Tuesday"]), {
    result: result3,
    message: "Test 3 No pasado",
  });

  const result4 = split("1 2 3 4 5 6", " ", 3);  // ["1", "2", "3 4 5 6"]
  console.assert(isArrayEqual(result4, ["1", "2", "3"]), {
    result: result4,
    message: "Test 4 No pasado",
  });

  const result5 = split("2024-07-20", "-", 3);  // ["2024-07-20"] 
  console.assert(isArrayEqual(result5, ["2024", "07", "20"]), {
    result: result5,
    message: "Test 5 No pasado",
  });

  const result6 = split("2024-07-20", " ", 3);  // ["2024-07-20"] como no hay separador devuelve newResult completo 
  console.assert(result6[0] === "2024-07-20", {
    result: result6,
    message: "Test 6 No pasado",
  });
}