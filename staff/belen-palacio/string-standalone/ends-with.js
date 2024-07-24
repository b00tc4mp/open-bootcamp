

function endsWith(string) {
    let search = '';
    let position = 0 
   
    
    for (let i = 0; i < search.length; i++) { // luego me creo un for con la condicion de parada de todo el contenido a analizar y comparo.
        if (string[position + i] !== search[i]) {
            return false;
        }
    }
    return true;

{
        const result1 = endsWith("Hola mundo");
        console.assert(
          result1 === "Hola mundo".endsWith(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = endsWith("Test the function");
        console.assert(result2 === "Test the function".endsWith(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}

//crear una funcion que me analice el contenido de mi string y luego me compare
// si finaliza con el mismo modo que le doy
// si es asi, que me devuelva verdadero, y si no negativo 