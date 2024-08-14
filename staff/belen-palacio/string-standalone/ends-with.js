// El método endsWith() de String values determina si una cadena termina 
// con los caracteres de esta cadena y devuelve verdadero o falso según corresponda.

// Parametro de entrada searchString, parametro de salida true or false

// Me creo una funcion con parametros de entrada de tipo string, string y searchString
// creo una variable que se defina como startIndex y sea el largo de mi string menos
// el largo de mi searchString para determinar la posición en string donde comienza 
// la subcadena que debería coincidir con searchString.
// Luego creo un for que recorra el largo de mi searchString y 
// Si cualquier carácter en la subcadena final de string no coincide con 
// el carácter correspondiente en searchString, la función retorna false.
// de lo contrario return true. 


function endsWith(string, searchString) {
  const startIndex = string.length - searchString.length;

    for (let i = 0; i < searchString.length; i++) {
      if (string[startIndex + i] !== searchString[i]) {   
          return false
      }
  }

  return true
}

{

const result1 = endsWith("tengo que terminar a tiempo", "tiempo");
console.assert(
   result1 === "tengo que terminar a tiempo".endsWith("tiempo"), 
      {
   result: result1,
   message: "Test 1 no pasado",

  });

   const result2 = endsWith("a tiempo no voy a terminar", "terminar");
console.assert(
   result2 === "a tiempo no voy a terminar".endsWith("terminar"), 
      {
   result: result2,
   message: "Test 2 no pasado",

  });

     const result3 = endsWith("a tiempo no voy a terminar", "termina");
console.assert(
   result3 === "a tiempo no voy a terminar".endsWith("termina"), 
      {
   result: result3,
   message: "Test 3 no pasado",

  });

}
