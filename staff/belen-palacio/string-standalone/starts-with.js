
function startsWith(string) {
    let search = '';
    let position = 0 
   
   // luego me creo un for con la condicion de parada de todo el contenido a analizar y comparo.
    
    for (let i = 0; i < search.length; i++) {
        if (string[position + i] !== search[i]) {
            return false;
        }
    }
    return true;

{
        const result1 = startsWith("Hola mundo");
        console.assert(
          result1 === "Hola mundo".startsWith(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = startsWith("Test the function");
        console.assert(result2 === "Test the function".startsWith(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}

//crear una funcion que me analice el contenido de mi string y luego me compare
// si inicia con con el mismo modo que le doy
// si es asi, que me devuelva verdadero, y si no negativo 