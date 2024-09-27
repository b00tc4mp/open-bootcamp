// el metodo forEach forEach ejecuta una función sobre cada elemento 
// de un array sin cambiar su contenido ni interrumpir el proceso.

// no modifico el array 


function forEach(array, callback) {

    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
     }
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
  
    const array1 = [1, 2, 3];
    
    const fn1 = (element) => element; 
    
    const result1 = forEach(array1, fn1)
    const nativeResult1 = array1.forEach(fn1)
  
    console.assert(result1 === nativeResult1, {
      result: result1,
      message: "Test 1.1 no pasado",
    });
  
    const array2 = [1, 2, 3];
  
    let accumulator = 0
    
    const fn2 = (element) => accumulator = accumulator + element; 
    
   forEach(array2, fn2)
  
    console.assert(accumulator === 6, {
      result: accumulator,
      message: "Test 2 no pasado",
    });
  
    
    const array3 = [1, 2, 3];
    const nativeArray3 = [1, 2, 3];
  
    const fn3 = (element, index, array) => array[index] = element * 2; 
  
    forEach(array3, fn3)
    nativeArray3.forEach(fn3)
    
    console.assert(isArrayEqual(array3, nativeArray3), {
      result: accumulator,
      message: "Test 3 no pasado",
    });
  
  }