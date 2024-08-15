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
  let result = "";  // empiezo una cadena vacía 
  
  for (let i = 0; i < string.length; i++) {
      let found = true; // asumo que el patron se encontro dentro 

      for (let j = 0; j < pattern.length; j++) { // recorro pattern 
          if (string[i + j] !== pattern[j]) { // comparo pattern con mi subcadena string de i 
              found = false; // si no hay coincidencias se marca false 
                 }
      }

          if (found) { // si hay coincidencias completas 
               result += replacement;
              i = i + pattern.length -1
                          // se reemplaza por replacement 
               } else {
          result += string[i];  // si no se mantiene el caracter de string i 
      }
  }

return result; // devuelvo resultado 

}



{
const test1 = "son las 4 de la mañana";
const result1 = replace(test1, "mañana", "tarde");
console.assert(test1 === "son las 4 de la mañana", {
  result: test1,
  message: "Test 1.1 no pasado",
});
console.assert(result1 === test1.replace("mañana", "tarde"), {
  result: result1,
  message: "Test 1.2 no pasado",
});

  const test2 = "I think Ruth's dog is cuter than your dog!";
const result2 = replace(test2, "Ruth's", 'ferret');
console.assert(test2 === "I think Ruth's dog is cuter than your dog!", {
  result: test2,
  message: "Test 2.1 no pasado",
});
console.assert(result2 === test2.replace("Ruth's", 'ferret'), {
  result: result2,
  message: "Test 2.2 no pasado",
});
}