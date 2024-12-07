function copyWithin(array, target = 0, start = 0, end = array.length) {

  const copyArray = [...array]
  
  target = (target < 0) ? array.length + target : target
  start = (start < 0) ? array.length + start : start
  end = (end < 0) ? array.length + end - 1 : end
  const stop = start + end - target
  
  for (let i = start; i < stop; i++)
    array[target + i - start] = copyArray[i] ?? array[target + i - start];

  return array;
}

{
  function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let result = true;
    let i = 0;
    while (i < arr1.length && result === true) {
      if (arr1[i] !== arr2[i]) result = false;
      i++;
    }
    return result;
  }
}

{
  const array1 = [1, 2, 3, 4, 5];
  const nativeArray1 = [1, 2, 3, 4, 5];
  const result1 = copyWithin(array1, 0, 3, 5); // [4, 5, 3, 4, 5]
  const nativeResult1 = nativeArray1.copyWithin(0, 3, 5);

  console.assert(isArrayEqual(result1, nativeResult1), {
    result: result1,
    message: "Test 1.1 no pasado",
  });

  console.assert(array1 === result1, {
    result: result1,
    message: "Test 1.2 no pasado",
  });

  const array2 = [1, 2, 3, 4, 5, 6];
  const nativeArray2 = [1, 2, 3, 4, 5, 6];
  const result2 = copyWithin(array2, -4, -3, -1); // [1, 2, 4, 5, 5, 6]
  const nativeResult2 = nativeArray2.copyWithin(-4, -3, -1);

  console.assert(isArrayEqual(result2, nativeResult2), {
    result: result2,
    message: "Test 2.1 no pasado",
  });

  console.assert(array2 === result2, {
    result: result2,
    message: "Test 2.2 no pasado",
  });

  const array3 = [10, 20, 30, 40, 50]; // parametro de start y end implicitos
  const nativeArray3 = [10, 20, 30, 40, 50];
  const result3 = copyWithin(array3, 2); // [10, 20, 10, 20, 30] copio desde la posicion 2, es decir el 30
  const nativeResult3 = nativeArray3.copyWithin(2);

  console.assert(isArrayEqual(result3, nativeResult3), {
    result: result3,
    message: "Test 3.1 no pasado",
  });

  console.assert(array3 === result3, {
    result: result3,
    message: "Test 3.2 no pasado",
  });
}