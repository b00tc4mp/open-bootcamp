// El método trim() de String values elimina los espacios 
// en blanco de ambos extremos de esta cadena y devuelve una 
// nueva cadena, sin modificar la cadena original.

// Parametros de entrada NINGUNO mas q string. Parametros de salida
// Una nueva cadena que representa str sin espacios en blanco tanto 
// al principio como al final. Los espacios en blanco se definen 
// como caracteres de espacio en blanco más terminadores de línea.
// Si ni el principio ni el final de str tienen espacios en blanco, 
// se devuelve una nueva cadena (básicamente, una copia de str).



function trim(string) {
  let result = "";
  let firstPosition = 0;
  let lastPosition = string.length -1;

  while (string[firstPosition] === " ") firstPosition++;
  while (string[lastPosition] === " ") lastPosition--;

  for (let i = firstPosition; i <= lastPosition; i++)
    result += string[i];

  return result;
}

{
  const result1 = trim("   belen   ");
  console.assert(result1 === "   belen   ".trim(), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const result2 = trim("   no     se");
  console.assert(result2 === "   no     se".trim(), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const result3 = trim("Hola como estás?");
  console.assert(result3 === "Hola como estás?".trim(), {
    result: result3,
    message: "Test 3 no pasado",
  });
}