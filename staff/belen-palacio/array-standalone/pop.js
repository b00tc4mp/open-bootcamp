// la funcion pop elimina el último elemento de un array y lo devuelve
// este metodo SI modifica la longitud del array 
// si el array esta vacio devuelve undefined 

function pop(array) {
    if (array.length === 0) {
        return undefined;  // si mi array es vacio, es decir posicion 0, devuelvo undefined
    }
    
    const element = array[array.length - 1];  // busco el ultimo elemento de mi array
    array.length = array.length - 1;  // me baso en la longitud de mi array, y elimino el último elemento para luego
    return element;  // devolver el elemento eliminado que es lo que estoy buscando 
}

{

const result1 = pop(["a", "b", "c", "d", "e"]);
const nativeResult1 = ["a", "b", "c", "d", "e"].pop();
console.assert(result1 === nativeResult1, {
    result: result1,
    message: "Test 1 no pasado",
});

// Test 2: Verificar si pop devuelve undefined para un array vacío
const result2 = pop([]);
const nativeResult2 = [].pop();
console.assert(result2 === nativeResult2, {
    result: result2,
    message: "Test 2 no pasado",
});

// Test 3: Verificar si pop elimina y devuelve el único elemento del array
const result3 = pop(["z"]);
const nativeResult3 = ["z"].pop();
console.assert(result3 === nativeResult3, {
    result: result3,
    message: "Test 3 no pasado",
});

// Test 4: Verificar si pop funciona correctamente con un array de números
const result4 = pop([1, 2, 3, 4, 5]);
const nativeResult4 = [1, 2, 3, 4, 5].pop();
console.assert(result4 === nativeResult4, {
    result: result4,
    message: "Test 4 no pasado",
});

// Test 5: Verificar si pop funciona correctamente en un array de elementos mixtos
const result5 = pop([true, null, "hello", 42]);
const nativeResult5 = [true, null, "hello", 42].pop();
console.assert(result5 === nativeResult5, {
    result: result5,
    message: "Test 5 no pasado",
});

}
