// El método slice() de String values extrae una sección de esta cadena
// y la devuelve como una nueva cadena, sin modificar la cadena original.
// parametros de entrada, start y end (opcional)
// parametro de salida una nueva cadena que contiene la sección extraída de la cadena.

// Mi funcion de tipo slice, contiene como parametros de entrada 
// string de tipo string y start de tipo number. Me creo una variable 
// result vacia que va a almacenar mi subcadena a extraer. 
// Luego inicializo un for que tiene como condicion de parada 
// el largo de mi string pero toma como parametro i = start 
// para que empiece a extraer la subcadena desde start. 
// en el primer caso va a ser 4. dentro de mi cadena se van a ir 
// almacenando en result los caracteres de string[i], 
// y como parametro de salida se devolvera result. 


function slice(string, start) {
    let result = ""

    for (let i = start; i < string.length; i++) {
        result += string[i];
    }

 return result;
}

{
   const result1 = slice("Hola mundo", 4);
    console.assert(
        result1 === "Hola mundo".slice(4),
          {
          result: result1,
          message: "Test 1 no pasado",
          }
   );
      
  const result2 = slice("que tal como estas", 10);
      console.assert(
        result2 === "que tal como estas".slice(10), {
        result: result2,
          message: "Test 2 no pasado",
        });

}
