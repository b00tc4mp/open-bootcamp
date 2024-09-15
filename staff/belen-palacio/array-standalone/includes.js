// funcion que determina si una matriz se encuentra o no 
// devuelve true or false 

function includes(array, valueToFind) {
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valueToFind) { 
        return true // si se encuentra true
      }
    }
    return false // si no false 
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
  
  const array1 = ["tengo", "que", "terminar", "a", "tiempo"];
  const result1 = includes(array1, "terminar");
  const nativeResult1 = array1.includes("terminar");
  
  console.assert(result1 === nativeResult1, {
    result: result1,
    message: "Test 1 no pasado"
  });
  
  