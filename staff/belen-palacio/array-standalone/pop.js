function pop(array) {
    if (array.length === 0) return undefined;
  
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
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
    
    const array1 = ["a", "b", "c", "d", "e"];
    const result1 = pop(array1);
    const nativeArray1 = ["a", "b", "c", "d", "e"];
    const nativeResult1 = nativeArray1.pop();
    console.assert(result1 === nativeResult1, {
       result: result1,
      message: "Test 1.1 no pasado",
    });
   console.assert(isArrayEqual(array1, nativeArray1), {
      result: array1,
      message: "Test 1.2 no pasado",
    });
    
  
    // Test 2: Verificar si pop devuelve undefined para un array vacío
    const array2 = [];
    const result2 = pop(array2);
    const nativeArray2 = [];
    const nativeResult2 = nativeArray2.pop();
    console.assert(result2 === nativeResult2, {
      result: result2,
          message: "Test 2.1 no pasado",
    });
   console.assert(isArrayEqual(array2, nativeArray2), {
      result: array2,
      message: "Test 2.2 no pasado",
    });
  
    // Test 3: Verificar si pop elimina y devuelve el único elemento del array
    const array3 = ["z"];
    const result3 = pop(array3);
    const nativeArray3 = ["z"];
    const nativeResult3 = nativeArray3.pop();
    console.assert(result3 === nativeResult3, {
      result: result3,
          message: "Test 3.1 no pasado",
    });
   console.assert(isArrayEqual(array3, nativeArray3), {
      result: array3,
      message: "Test 3.2 no pasado",
    });
  
    // Test 4: Verificar si pop funciona correctamente con un array de números
    const array4 = ["1, 2, 3, 4, 5"];
    const result4 = pop(array4);
    const nativeArray4 = ["1, 2, 3, 4, 5"];
    const nativeResult4 = nativeArray4.pop();
    console.assert(result4 === nativeResult4, {
      result: result4,
          message: "Test 4.1 no pasado",
    });
   console.assert(isArrayEqual(array4, nativeArray4), {
      result: array4,
      message: "Test 4.2 no pasado",
    });
  
    // Test 5: Verificar si pop funciona correctamente en un array de elementos mixtos
    const array5 = [true, null, "hello", 42];
    const result5 = pop(array5);
    const nativeArray5 = [true, null, "hello", 42];
    const nativeResult5 = nativeArray5.pop();
    console.assert(result5 === nativeResult5, {
      result: result5,
      message: "Test 5.1 no pasado",
    });
   console.assert(isArrayEqual(array5, nativeArray5), {
      result: array5,
      message: "Test 5.2 no pasado",
    });
  }