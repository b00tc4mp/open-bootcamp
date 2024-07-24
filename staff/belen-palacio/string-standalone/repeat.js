
function repeat(string) {
    let result = '';
    
    for(let i = 0; i < string.length; i++) {
        const character = string[i];
    
        if(repeat === string[0])
        result += string
    }
    
    return result;
    
    }
    
    
    {
    const result1 = repeat("belen");
    console.assert (
        result1 === "belen".repeat(), 
        {
          result: result1,
          message: "Test 1 no pasado",
        
    });
    
    const result2 = repeat("nose");
    console.assert (
        result2 === "nose".repeat(), 
        {
          result: result2,
          message: "Test 2 no pasado",
    
    });
    
    }

// tengo que crear una funcion en donde mi contenido de strings se analice y se repita 
// las veces que yo quiera

// mi funcion tiene el objetivo de devolverme como resultado mi palabra 
// repetida las veces que yo quiera

