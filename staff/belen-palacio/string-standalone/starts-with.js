// El método startsWith() de String values determina si esta cadena 
// comienza con los caracteres de una cadena especificada y devuelve 
// verdadero o falso según corresponda. Parametros de entrada 
// searchString y position (opcional). Parametros de salida true or false. 

// Mi funcion de tipo startsWith se inicializa con los parametros de entrada
// string de tipo string y searchString de tipo string tambien. Dentro de mi 
// funcion se encuentra un for que tiene como condicion de parada mi searchString
// para compararlo con mi string y ver si son similares. Luego me creo un if
// que va a determinar si mi string[i] es igual a mi searchString[i], para 
// que cuando sean diferentes se corte el bucle y deje de recorrer y devuelva false. 
// Por ultimo como parametros de salida devuelvo true si mi searchString se 
// encuentra dentro de mi string. 

function startsWith(string, searchString) {
  
  for (let i = 0; i < searchString.length; i++) {
      if (string[i] !== searchString[i]) {
          return false;
      }
  }
  return true;
}

{
  const result1 = startsWith("Hola mundo", "Hola");
  console.assert(
      result1 === "Hola mundo".startsWith("Hola"),
      {
          result: result1,
          message: "Test 1 no pasado",
      }
  );

  const result2 = startsWith("Test the function", "Test");
  console.assert(
      result2 === "Test the function".startsWith("Test"),
      {
          result: result2,
          message: "Test 2 no pasado",
      }
  );
}