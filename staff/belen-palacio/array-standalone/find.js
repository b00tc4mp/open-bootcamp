// El método find() devuelve el valor del primer elemento 
// del array que cumple la función de prueba proporcionada

// si el metodo esta devuelve eso si no, -1 

function find(array, callback) {
  let result = undefined //   
  let i = 0
    
    
    while (i < array.length && result === undefined) { // si no encontramos valor, es decir que sea === undefined
        if (callback(array[i], i, array)) {
            result = array[i];  // cuando encontramos lo guardamos en result 
        }
        
        i++;
    }
    
    return result;  // sino undefined como inicializamos al principio 
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
  const result1 = find(array1, fn1);
  const nativeResult1 = array1.find(fn1);

  console.assert(result1 === nativeResult1, {
    result: result1,
    message: "Test 1 no pasado",
  });

 const array2 = [10, 50, 300]; 
  const fn2 = (element) => element >= 2; 
  const result2 = find(array2, fn2);
  const nativeResult2 = array2.find(fn2);

  console.assert(result2 === nativeResult2, {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = [10, 50, 300]; 
  const fn3 = (element) => element < 2; 
  const result3 = find(array3, fn3);
  const nativeResult3 = array3.find(fn3);

  console.assert(result3 === nativeResult3, {
    result: result3,
    message: "Test 3 no pasado",
  });

}}