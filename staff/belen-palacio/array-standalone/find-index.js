// El método find() devuelve el valor del primer elemento 
// del array que cumple la función de prueba proporcionada

// si el metodo esta devuelve eso si no, -1 

function findIndex(array, callback) {
  let result = -1 // le damos valor -1 inicial   
  let i = 0
   

   
    while (i < array.length && result === -1) { // si no encontramos valor, es decir que sea === undefined
        if (callback(array[i], i, array)) {
            result = i;  
        }
        
        i++;
    }

    return result;  // si no -1. no se encontro nada 
}

{
    
function isArrayEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
  
      let result = true;
      let i = 0;
      while (i < arr1.length || result === false) {
        if (arr1[i] !== arr2[i]) result = false;
        i++;
      }
      return result;
}

{

 const array1 = [1, 2, 3]; 
  const fn1 = (element) => element >= 2; // 2 
  const result1 = findIndex(array1, fn1);
  const nativeResult1 = array1.findIndex(fn1);

  console.assert(result1 === nativeResult1, {
    result: result1,
    message: "Test 1 no pasado",
  });

 const array2 = [10, 50, 300]; 
  const fn2 = (element) => element >= 2; 
  const result2 = findIndex(array2, fn2);
  const nativeResult2 = array2.findIndex(fn2);

  console.assert(result2 === nativeResult2, {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = [10, 50, 300]; 
  const fn3 = (element) => element < 2; 
  const result3 = findIndex(array3, fn3);
  const nativeResult3 = array3.findIndex(fn3);

  console.assert(result3 === nativeResult3, {
    result: result3,
    message: "Test 3 no pasado",
  });

}}
