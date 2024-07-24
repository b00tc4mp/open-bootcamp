function slice(string) {
    let start = 0;
    let end = ''
    
   
    
    for (let i = start; i < end; i++) {
        result += string[i]; 
    }

 return result;


{
        const result1 = slice("Hola mundo");
        console.assert(
          result1 === "Hola mundo".slice(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = slice("Test the function");
        console.assert(result2 === "Test the function".slice(), {
          result: result2,
          message: "Test 2 no pasado",
        });

}
}