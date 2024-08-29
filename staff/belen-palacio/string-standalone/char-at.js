
// mi funcion que analiza mi contenido de caracteres, lo que hace es determinarme
// uno de esos caracteres. para ello me creo una 

// crear una funcion que me analice mi contenido de palabras y luego de indicarle
// me devuelva el caracter elegido dentro de la funcion. parametros que usa charAt
// string, index. parametro de entrada index, parametro de salida un caracter
// para ello debo crear una funcion con mi contenido de string vacio e index vacio 
// y determinar index 
// por ultimo llamar al resultado para que me devuelva el caracter correspondiente


// la funcion charAt, devuelve un caracter a partir de un indice que le dimos como parametro. 
// me creo una funcion charAt con contenido de string e index. 
// defino index y especifico que caracter quiero llamar dentro de mi cadena de string 
// por ultimo return string[index]

// la funcion charAt, devuelve un caracter a partir de un indice que le dimos como parametro. 
// parametro de entrada string e index, parametro de salida character 
// el caracter q devuelvo es el q le indico en el index 

function charAt(string, index) {
  
  // cuando index es igual a undefined la funcion no funciona correctamente 
  // entonces tengo q modificar la funcion para que funcione para este caso

  // cuando index es igual undefined devuelvo la posicion 0 de mi string 

  if (index === undefined) {
    return string[0]
  }
  
  return string[index]
  
}
  




{

  const result1 = charAt("buenos dias", 4);
  console.assert(
    result1 === "buenos dias".charAt(4),
    {
      result: result1,
      message: "Test 1 no pasado",
    
  });

  const result2 = charAt("buenas noches");
  console.assert(
    result2 === "buenas noches".charAt(),
    {
      result: result2,
      message: "Test 2 no pasado",
    }
  )
}
