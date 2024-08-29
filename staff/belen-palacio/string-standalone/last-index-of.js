// El método lastIndexOf() de String values busca esta cadena y 
// devuelve el índice de la última aparición de la subcadena especificada. 
// Parametro de entrada string, searchString y position (optional)
// devuelve la última aparición de la subcadena especificada 
// en un índice menor o igual al número especificado. 


// Crear un bucle que comienza desde el final de la cadena y avanza hacia el principio
// y me devuelva la primer coincidencia. 



function lastIndexOf(string, searchString) {
  let result = -1
  
    for (let i = string.length - searchString.length; i >= 0; i--) {
         let subString = "";
       for (let j = 0; j < searchString.length; j++) { // Cadena que recorre y compara searchString
         subString += string [i + j]; // Agregar cada caracter de string a subString.
       }

    if (subString === searchString) { // Si subString es igual a searchString, devuelve el índice actual i 
      return i;
    }
     }
  
   return result // si no, devuelve -1
}



{
    const result1 = lastIndexOf("Hola mundo", "o");
    console.assert(
        result1 === "Hola mundo".lastIndexOf("o"),
        {
            result: result1,
            message: "Test 1 no pasado",
        }
    );

    const result2 = lastIndexOf("Test the function", "t");
    console.assert(
        result2 === "Test the function".lastIndexOf("t"),
        {
            result: result2,
            message: "Test 2 no pasado",
        }
    );
}