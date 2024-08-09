// El método concat() de String values concatena los argumentos 
// de la cadena a esta cadena y devuelve una nueva cadena.
// parametro de entrada los strings que sean, string1, string2, ... 
// parametro de salida una nueva cadena. 

// recorrer las cadenas y devolver result 


function concat(...strings) {
  let result = '';

  for (let i = 0; i < strings.length; i++) {
      result += strings[i]; 
  }

  return result;
}

{
  const result1 = concat("que", "tal");
  console.assert(
      result1 === "quetal".concat(),
      {
          result: result1,
          message: "Test 1 no pasado",
      }
  );

  const result2 = concat(1, 2, 3);
  console.assert(
      result2 === "123".concat(),
      {
          result: result2,
          message: "Test 2 no pasado",
      }
  );
}