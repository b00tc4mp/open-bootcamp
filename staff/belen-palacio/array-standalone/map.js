function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++)
      result[i] = callback(array[i], i, array);
    return result;
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
    const fn1 = (element) => element * 2;
    const result1 = map(array1, fn1);
    const nativeResult1 = array1.map(fn1);
  
    console.assert(isArrayEqual(result1, nativeResult1), {
      result: result1,
      message: "Test 1 no pasado",
    });
  
    const array2 = [1, 2, 3];
    const fn2 = (element, index) => element * index;
    const result2 = map(array2, fn2);
    const nativeResult2 = array2.map(fn2);
  
    console.assert(isArrayEqual(result2, nativeResult2), {
      result: result2,
      message: "Test 2 no pasado",
    });
  
    const array3 = [1, 2, 3];
    const fn3 = (element, index, array) =>
      element * array[array.length - index - 1];
    const result3 = map(array3, fn3);
    const nativeResult3 = array3.map(fn3);
  
    console.assert(isArrayEqual(result3, nativeResult3), {
      result: result3,
      message: "Test 3 no pasado",
    });
  }