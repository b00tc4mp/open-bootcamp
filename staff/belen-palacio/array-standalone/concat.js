// funcion que concatena dos arrays y devuelve un nuevo array. 

function concat(array1, array2) {
    let newArray = []
  
    for (let i = 0; i < array1.length; i++) {
      newArray[newArray.length] = array1[i]; // agregar un nuevo elemento al final del array
    }
  
    for (let j = 0; j < array2.length; j++) {
      newArray[newArray.length] = array2[j]; // agregamos el resto 
    }
  
    return newArray // devolvemos la concatenacion de los dos arrays
  }
  
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
  
  const array1 = ['a', 'b'];
  const array2 = ['c', 'd'];
  const result1 = concat(array1, array2); // ['a', 'b', 'c', 'd']
  const nativeResult1 = array1.concat(array2); // ['a', 'b', 'c', 'd']
  
  console.assert(isArrayEqual(result1, nativeResult1), {
    result: result1,
    message: "Test 1 no pasado",
  });
  
  const array5 = [1, 2];
  const array6 = [2, 1];
  const result2 = concat(array5, array6); 
  const nativeResult2 = array5.concat(array6); 
  
  console.assert(isArrayEqual(result2, nativeResult2), {
    result: result2,
    message: "Test 2 no pasado",
  });