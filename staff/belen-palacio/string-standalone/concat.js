function concat(string) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        result += string[i]; {
            
        }



    return result
        
}

{
        
    const result1 = concat("hola", "que", "tal");
        console.assert(
          result1 === "hola", "que", "tal".concat(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = concat("chau", "que", "tal");
        console.assert(result2 === "chau", "que", "tal".concat(), 
        
        {
          result: result2,
          message: "Test 2 no pasado",
        }
        );

}
}

// en mi funcion concat lo quiero lograr es que se analice el contenido de mi string
// y dentro de ello me una todas mis palabras como devolucion 

// crear una funcion que me combina mi cadena de texto con otra, ya sea diferente o ya existente
