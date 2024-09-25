// El método copyWithin() transfiere una copia plana de una sección a otra dentro 
// del mismo array, sin modificar su propiedad length y lo devuelve.

// si modifica el array 

function copyWithin(array, target, start, end) {
    
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
}

{
    
const array1 = [1, 2, 3, 4, 5];
const result1 = copyWithin(array1, 0, 3, 5); // [4, 5, 3, 4, 5] ????
const nativeResult1 = [4, 5, 3, 4, 5]; 

console.assert(isArrayEqual(result1, nativeResult1), {
    result: result1,
    message: "Test 1 no pasado",
});

}