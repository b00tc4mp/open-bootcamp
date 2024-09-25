// funcion que determina si una matriz se encuentra o no 
// devuelve true or false 

function includes(array, valueToFind) {
  let i = 0;
  let result = false;  // Asumimos inicialmente que el valor no está presente

  
  while (i < array.length && !result) { // i es diferente a result, ya que busco el valor 
      if (array[i] === valueToFind) { // si lo encuentro devuelvo true 
          result = true;
      }
      
      i++;
  }

  return result;  // y si no false 
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

