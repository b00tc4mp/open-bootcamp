

function replaceAll(string) {
let result = ''

    for(let i = 0; i < string.length; i ++)
        if(string[i] === 'tiempo') {
             result += '....' 
    } else {
        return += string[i];


    }
  
}





{

const result1 = replaceAll("tengo que terminar a tiempo");
console.assert (
    result ===  "tengo que terminar a tiempo".replaceAll(),
     { 
        result = result1,
        message: 'Test 1 no pasado',
    
     });

    
     const result2 = replaceAll("a tiempo no voy a terminar");
     console.assert (
         result ===  "a tiempo no voy a terminar".replaceAll(),
          { 
             result = result2,
             message: 'Test 1 no pasado',
         
          });


 }


 // tengo que crear una funcion que analice mi cadena de strings y luego 
 // de comprobar cuales matchean con mi frase me modifique la palabra que quiero 


 function replaceAll(string) {
    let result = ''
    let character = 0 
        
    
        for(let i = 0; i < string.length; i ++)
            if(string[i] === character) {
                 result += string[i];   ///// ?????????
            } else {
            result += /////////????????????????????;
    
    
        }
    
    }
    
    
    
    
    
    {
    
     const result1 = replaceAll("tengo que terminar a tiempo");
     console.assert(
         result1 === "tengo que terminar a tiempo".replaceAll(), 
            {
         result: result1,
         message: "Test 1 no pasado",
            
        });
    
         const result2 = replaceAll("a tiempo no voy a terminar");
     console.assert(
         result2 === "a tiempo no voy a terminar".replaceAll(), 
            {
         result: result2,
         message: "Test 2 no pasado",
            
        });
    
    
     }