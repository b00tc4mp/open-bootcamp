// el método push toma un array y un elemento, luego coloca el elemento 
// al final del array y devuelve la nueva longitud del array.

function push(array, element) {
    array[array.length] = element; // agrego mi elemento 
    return array.length; // devuelvo el nuevo array 
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
  
    const array1 = ["a", "b", "c"];
    const result1 = push(array1, "d");
    const nativeArray1 = ["a", "b", "c"];
    const nativeResult1 = nativeArray1.push("d");
    console.assert(result1 === nativeResult1, {
      result: result1,
      message: "Test 1.1 no pasado",
    });
    console.assert(isArrayEqual(array1, nativeArray1), {
      result: array1,
      message: "Test 1.2 no pasado",
    });
  
      const array2 = [];
    const result2 = push(array2, "z");
    const nativeArray2 = [];
    const nativeResult2 = nativeArray2.push("z");
    console.assert(result2 === nativeResult2, {
      result: result2,
      message: "Test 2.1 no pasado",
    });
    console.assert(isArrayEqual(array2, nativeArray2), {
      result: array2,
      message: "Test 2.2 no pasado",
    });
  
      const array3 = [1, 2, 3];
    const result3 = push(array3, 4);
    const nativeArray3 = [1, 2, 3];
    const nativeResult3 = nativeArray3.push(4);
    console.assert(result3 === nativeResult3, {
      result: result3,
      message: "Test 3.1 no pasado",
    });
    console.assert(isArrayEqual(array3, nativeArray3), {
      result: array3,
      message: "Test 3.2 no pasado",
    });
  
       const array4 = [true, null, "hello"];
    const result4 = push(array4, 42);
    const nativeArray4 = [true, null, "hello"];
    const nativeResult4 = nativeArray4.push(42);
    console.assert(result4 === nativeResult4, {
      result: result4,
      message: "Test 4.1 no pasado",
    });
    console.assert(isArrayEqual(array4, nativeArray4), {
      result: array4,
      message: "Test 4.2 no pasado",
    });
  
  }