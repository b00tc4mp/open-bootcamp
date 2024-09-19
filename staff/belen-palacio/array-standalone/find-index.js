// El método find() devuelve el valor del primer elemento 
// del array que cumple la función de prueba proporcionada

// si el metodo esta devuelve eso si no, -1 

function findIndex(array, callback) {
    let result = -1;
    
   for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) { // si llamo a mi funcion y encuentra 
         result = array[i];
    }
   }
    
  return result // y si no undefined 
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
  const nativeResult1 = array1.findIndex(fn1);

  console.assert(isArrayEqual(result1, nativeResult1), {
    result: result1,
    message: "Test 1 no pasado",
  });

 const array2 = [10, 50, 300]; 
  const fn2 = (element) => element >= 2; // estoy buscando que no encuentra
  const result2 = find(array2, fn2);
  const nativeResult2 = array2.findIndex(fn2);

  console.assert(isArrayEqual(result2, nativeResult2), {
    result: result2,
    message: "Test 2 no pasado",
  });
    
}}
