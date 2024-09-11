function indexOf(array, searchElement, fromIndex = 0) { 
    let result = -1
    let i = fromIndex // en vez de establecer i = 0 le doy el valor de fromIndex y a este 0
  
  
    while (i < array.length) { // recorremos el array siempre y cuando el valor de i sea menor a array.length
      if (array[i] === searchElement) { // si mi valor de i es igual a searchElement
        result = i; // guardamos la primer coincidencia 
        i = array.length // para salir del bucle while establezco i como mayor a mi array 
      }
      i++ // si mi condicion no se cumple incremento i, y sigo con mi recorrido del array 
    }
        
  return result // devuelvo result 
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
  
      const array2 = [1, 2, 3, 4, 3]; 
      const result2 = indexOf(array2, 3); 
      const nativeResult2 = array2.indexOf(3); 
  
      console.assert(result2 === nativeResult2, {
        result: result2,
        message: "Test 2 no pasado",
      });
  
  }