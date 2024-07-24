
function replace(string) {
    let result = '';
    
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'a') {
            result += 'x'; 
        } else {
            result += string[i];
    
        }
    
    }
    
    
    {
        
     const result1 = replace("son las 4 de la mañana");
     console.assert (
         result1 === "son las 4 de la mañana".replace(), 
            {
         result: result1,
         message: "Test 1 no pasado",
            
        });
        
     const result2 = replace("de noche todo es mas tranquilo");
     console.assert (
        result2 === "de noche todo es mas tranquilo".replace(), 
      {
         result: result2,
         message: "Test 2 no pasado",  
      
      });
    }
    }