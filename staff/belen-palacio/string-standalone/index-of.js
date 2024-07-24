function indexOf(string) {
    let search = '';
    let position = 0 
   
    
    for (let i = 0; i < search.length; i++) { // luego me creo un for con la condicion de parada de todo el contenido a analizar y comparo.
        if (string[position + i] !== search[i]) {
            return false;
        }
    }
    return true;

{
        const result1 = indexOf("Hola mundo");
        console.assert(
          result1 === "Hola mundo".indexOf(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = indexOf("Test the function");
        console.assert(result2 === "Test the function".indexOf(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}