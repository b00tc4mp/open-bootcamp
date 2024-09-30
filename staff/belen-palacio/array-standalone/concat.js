// funcion que concatena dos arrays y devuelve un nuevo array.

function concat(...arguments) {
  let newArray = [];

   for (let i = 0; i < arguments.length; i++) { // un for dentro de un for 
    for (let j = 0; j < arguments[i].length; j++) {
      newArray[newArray.length] = arguments[i][j] // al nuevo array le agrego ambos 
    }
  }

  return newArray
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

  const array1 = ["a", "b"];
  const concatArray1 = ["c", "d"];
  const result1 = concat(array1, concatArray1); // ['a', 'b', 'c', 'd']
  const nativeResult1 = array1.concat(concatArray1); // ['a', 'b', 'c', 'd']

  console.assert(isArrayEqual(result1, nativeResult1), {
    result: result1,
    message: "Test 1 no pasado",
  });

  const array2 = [1, 2];
  const concatArray2 = [2, 1];
  const result2 = concat(array2, concatArray2);
  const nativeResult2 = array2.concat(concatArray2);

  console.assert(isArrayEqual(result2, nativeResult2), {
    result: result2,
    message: "Test 2 no pasado",
  });

  const array3 = [1, 2];
  const concatArray3 = [2, 1];
  const concatArray3b = [2, 1];
  const result3 = concat(array3, concatArray3,concatArray3b);
  const nativeResult3 = array2.concat(concatArray3, concatArray3b);

  console.assert(isArrayEqual(result3, nativeResult3), {
    result: result3,
    message: "Test 3 no pasado",
  });
}