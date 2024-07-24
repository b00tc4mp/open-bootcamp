//

function lastIndexOf(string) {
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
        const result1 = lastIndexOf("Hola mundo");
        console.assert(
          result1 === "Hola mundo".lastIndexOf(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = lastIndexOf("Test the function");
        console.assert(result2 === "Test the function".lastIndexOf(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}

// pasa pero esta erroneo 