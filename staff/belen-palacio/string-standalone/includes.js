// El método includes() de String values realiza una búsqueda q
// distingue entre mayúsculas y minúsculas para determinar si una 
// cadena dada se puede encontrar dentro de esta cadena, y devuelve 
// verdadero o falso según corresponda.

// Case sensitive. 

// Parametros de entrada searchString, position (optional)
// Parametro de salida true or false. Case sensitive. 

// mi funcion includes busca comparar si un string se encuentra
// dentro de mi string. si se encuentra devuelve true, si no false 



function includes(string, searchString) {

    for (let i = 0; i < string.length; i++) {
        let subString = "";
        
        for (let j = 0; j < searchString.length; j++) {
            subString += string[i + j];
    }
        if (subString === searchString)
            return true;
        }

    return false
}


{
    const result1 = includes("tengo que terminar a tiempo", "terminar");
    console.assert(
        result1 === "tengo que terminar a tiempo".includes("terminar"), 
        {
            result: result1,
            message: "Test 1 no pasado",
        }
    );

    const result2 = includes("a tiempo no voy a terminar", "tiempo");
    console.assert(
        result2 === "a tiempo no voy a terminar".includes("tiempo"), 
        {
            result: result2,
            message: "Test 2 no pasado",
        }
    );

     const result3 = includes("a tiempo no voy a terminar", "casa");
    console.assert(
        result3 === "a tiempo no voy a terminar".includes("casa"), 
        {
            result: result3,
            message: "Test 3 no pasado",
        }
    );
}