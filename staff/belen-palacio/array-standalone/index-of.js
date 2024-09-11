// la funcion indexOf recorre el array y devuelve el índice 
// del elemento indicado si lo encuentra, o devuelve valor -1 si no esta

function indexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) { // creo un for que recorra mi array 
      if (array[i] === searchElement) { // y comparo el valor de la posicion de i con mi searchElement
        return i; // si hay coincidencia devuelvo el indice 
      }
    }
    return -1 // si no se encuentra devuelvo -1
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
  
    const array1 = [1, 2, 3, 4, 5]; 
    const result1 = indexOf(array1, 3); // deberia devolver 2
    const nativeResult1 = array1.indexOf(3); // deberia devolver 2
  
    console.assert(result1 === nativeResult1, {
      result: result1,
      message: "Test 1 no pasado",
    });
  
  }