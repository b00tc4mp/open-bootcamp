// El método replace() de String values devuelve una nueva cadena con una,
// algunas o todas las coincidencias de un patrón reemplazadas por un reemplazo. 
// El patrón puede ser una cadena o una expresión regular, y el reemplazo 
// puede ser una cadena o una función llamada para cada coincidencia. 
// Si el patrón es una cadena, solo se reemplazará la primera ocurrencia. 
// La cadena original no se modifica.

// Parametros de entrada pattern, replacement, parametro de salida
// Una nueva cadena, con una, algunas o todas las coincidencias 
// del patrón reemplazadas por el reemplazo especificado.


function replace(string, pattern, replacement) {
    let startIndex = -1
    
    
  for (let i = 0; i < string.length - pattern.length; i++) {
      
  }

    
}


{
  const test = "son las 4 de la mañana";
  const result1 = replace(test, "mañana", "tarde");
  console.assert(test === "son las 4 de la mañana", {
    result: test,
    message: "Test 1.1 no pasado",
  });
  console.assert(result1 === test.replace("mañana", "tarde"), {
    result: result1,
    message: "Test 1.2 no pasado",
  });
}