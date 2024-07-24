
function charAt(string) { 
    let character = 0
    let result = '' 

     for (let i = 0; i < string.length; i++) { 
      

    return result // creo un for para que me recorra el largo de mi string y me devuelva un resultado 
    
    
}



{
        
    const result1 = charAt("hola");
        console.assert(
          result1 === "hola".charat(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = charAt("chau");
        console.assert(result2 === "chau".charAt(), 
        
        {
          result: result2,
          message: "Test 2 no pasado",
        }
        );

}
}

// en mi funcion busco encontrar con CharAt un caracter especifico dentro de mi string
// por ende, creo una funcion, inicializo mi character en valor 0 y a partir de ahi
// creo un for para que me recorra el largo de mi string y me devuelva un resultado 

// if? index? 


function charAt(string) { 
    let character = 0
    let index = 0 
    let result = '' 

     for (let i = 0; i < string.length; i++) { 
       if (i === index) {
           result = string[i];
           break;
       }

    return result 
    
    
}

{
        
    const result1 = charAt("hola");
        console.assert(
          result1 === "hola".charat(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = charAt("chau");
        console.assert(result2 === "chau".charAt(), 
        
        {
          result: result2,
          message: "Test 2 no pasado",
        }
        );

}
}