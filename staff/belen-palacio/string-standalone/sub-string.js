function substring(string) { // debo tener un comienzo y un final 
    let start = 0;
    let end = ''
    let result = '' 

     for (let i = 0; i < string.length; i++) { 
      
         if (i >= start && i < end) { 
            
            result += string[i];
            
        } else if (i >= end) { // un else if que frene cuando el valor de i sea mayor o igual que mi end. 
            break;
        }

    return result // por ultimo devolver un result 
    
    
}



{
        
    const result1 = subString("que tal como estas");
        console.assert(
          result1 === "que tal como estas".substring(),
          {
            result: result1,
            message: "Test 1 no pasado",
          }
        );
      
        const result2 = subString("lalala");
        console.assert(result2 === "lalala".substring(), 
        
        {
          result: result2,
          message: "Test 2 no pasado",
        }
        );

}
}

// crear una funcion que extraiga una parte de una cadena de mi texto y devuelva esa parte como una nueva cadena
// para ello, tiene que tener un start y un end. 

// crear un for que me determine mi condicion de parada y a partir de ahi un if que me determine si 
// mi valor de i se encuentra dentro de mi start y mi end. si es asi, me devuelve un result += string[i] es decir
// me incrementa el valor de i 
// un else if que frene cuando el valor de i sea mayor o igual que mi end. 
// por ultimo devolver un result 
