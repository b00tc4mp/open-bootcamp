// El método every prueba si todos los elementos pasan la prueba
// implementada por la función proporcionada. 
// Devuelve true or false 

function every(array, callback) {
  let result = true 
     let i = 0;
  
  while (i < array.length && result) { // siempre y cuando i sea menos que array.length y result true? estoy dentro del while
    if (!callback(array[i], i, array)) {
      result = false;  // si encuentro un elemento que no cumple la condición, cambiamos result a false
    }
      
    i++;
      
  }

  return result // true or false 
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

const array1 = [11, 12, 21, 22, 100];
const fn1 = (num) => num > 10;
const result1 = every(array1, fn1); // en este caso vamos a buscar si los numeros son mayores a 10 
const nativeResult1 = array1.every(fn1);  // true todos 

console.assert(isArrayEqual(result1, nativeResult1), {
  result: result1,
  message: "Test 1 no pasado",
});

const array2 = [0, 1, -1];
const fn2 = (element) => num = 10;
const result2 = every(array2, fn2); 
const nativeResult2 = array2.every(fn2);  

console.assert(isArrayEqual(result2, nativeResult2), {
  result: result2,
  message: "Test 2 no pasado",
});

}
 