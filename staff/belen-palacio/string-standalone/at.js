//

function at(string) {
    let index = ''
   
    
     for (let i = 0; i < string.length; i++) {
            if (i === index) {
                result = string[i];
                break;
            }
        }

    return result
    

{
        
    const result1 = at("Hola mundo");
        console.assert(
          result1 === "Hola mundo".at(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = at("Test the function");
        console.assert(result2 === "Test the function".at(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}