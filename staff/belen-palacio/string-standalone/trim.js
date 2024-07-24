//

function trim(string) {
    let start = 0;
    let end = ''

    for (let i = 0; i < string.length; i++) {
        if (string[start] !== ' ') {
            break;
        }
        start++;
    }

    for (let j = 0; j < string.length; j++) {
        if (string[end] !== ' ') {
            break;
        }
        end--;
    }

    return ? 
}

{
        const result1 = trim("   belen   ");
        console.assert(
          result1 === "   belen   ".trim(),{
          
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = trim("   nose   ");
        console.assert(
          result1 === "   nose   ".trim(),{
          
            result: result2,
            message: "Test 1 no pasado",
          
 });

}




