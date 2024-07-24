function includes(string) {
    let search = ''
    let length = ''  //error 
                        
// y una variable llamada length? tengo que analizar si mi subcadena se encuentra
// dentro de mi cadena

    for (let i = 0; i <= string.length; i++) { // luego me creo un for con la condicion de parada de todo el contenido a analizar y comparo.
        let found = true;

         for (let j = 0; j < search.length; j++) {
            if (string[i + j] !== search[j]) {
                found = false;
                break;
            }
        }


     return result
}


{

 const result1 = includes("tengo que terminar a tiempo");
 console.assert(
     result1 === "tengo que terminar a tiempo".includes(), 
        {
     result: result1,
     message: "Test 1 no pasado",
        
    });

     const result2 = includes("a tiempo no voy a terminar");
 console.assert(
     result2 === "a tiempo no voy a terminar".includes(), 
        {
     result: result2,
     message: "Test 2 no pasado",
        
    });


 }
}


// let searchLength = search.length
// includes, necesitas verificar si una subcadena (o "search term") está presente en una cadena principal. 
// La función includes en JavaScript se utiliza para determinar si 
// una cadena contiene una subcadena específica y devuelve un valor booleano (true o false).


// crear una variable llamada search que va a ser la cadena de string a devolver 
// y una variable llamada length? tengo que analizar si mi subcadena se encuentra
// dentro de mi cadena
// luego me creo un for con la condicion de parada de todo el contenido a analizar 
// y comparo. Despues de la primer linea del for me guardo el booleano true

// Luego me creo un for en donde voy a analizar el largo de mi subcadena y ver si matchea con mi contenido de candena
// los guardo como estan en mi cadena result y si no, los convierto y los guardo en mi cadena result
// Por ultimo mando mi result como return de la funcion. 