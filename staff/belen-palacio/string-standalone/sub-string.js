// El método substring() de String values devuelve la parte 
// de esta cadena desde el índice inicial hasta el índice final excluido
// o hasta el final de la cadena si no se proporciona ningún índice final

// Parametros de entrada indexStart, indexEnd (opcional)
// Parametro de salida una nueva cadena que contiene la parte 
// especificada de la cadena dada. 


function substring(string, indexStart) { 
  let result = "";

   for (let i = indexStart; i < string.length; i++) { 
        result += string[i];
   }

  return result 

}

{
      
  const result1 = substring("que tal como estas", 5);
      console.assert(
        result1 === "que tal como estas".substring(5),
        {
          result: result1,
          message: "Test 1 no pasado",
        }
      );
    
      const result2 = substring("lalala", 3);
      console.assert(result2 === "lalala".substring(3), 
      
      {
        result: result2,
        message: "Test 2 no pasado",
      }
      );

}
