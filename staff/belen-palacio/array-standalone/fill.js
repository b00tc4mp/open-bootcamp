// método que rellena todos los elementos de un array desde 
// una posición de inicio hasta una posición final con un valor estático

function fill(array, value, start = 0, end = array.length) {


  for (let i = start; i < end; i++) { // para recorrerlo desde q inicia hasta q termina
    array[i] = value; // cambio el valor al que le di 
  }

  return array
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

const array1 = [1, 2, 3, 4];
const result1 = fill(array1, 0);  // [0, 0, 0, 0]
const nativeArray1 = [1, 2, 3, 4];
const nativeResult1 = nativeArray1.fill(0); 
console.assert(isArrayEqual(result1, nativeResult1), {
  result: result1,
  message: "Test 1 no pasado"
});
