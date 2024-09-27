function at(array, index) {
    if (!(typeof index === "number")) return array[0]
      
      return array[(index > 0) ? index : array.length + index]
    }
    
    {
    
    const result1 = at(["a", "b", "c", "d", "e"], 2);
    const nativeResult1 = ["a", "b", "c", "d", "e"].at(2);
    console.assert(result1 === nativeResult1, {
        result: result1,
        message: "Test 1 no pasado",
    });
    
    const result2 = at(["a", "b", "c", "d", "e"], -1);
    const nativeResult2 = ["a", "b", "c", "d", "e"].at(-1);
    console.assert(result2 === nativeResult2, {
        result: result2,
        message: "Test 2 no pasado",
    });
    
    const result3 = at(["a", "b", "c", "d", "e"], 10000);
    const nativeResult3 = ["a", "b", "c", "d", "e"].at(10000);
    console.assert(result3 === nativeResult3, {
        result: result3,
        message: "Test 3 no pasado",
    });
    
    const result4 = at(["a", "b", "c", "d", "e"], -100);
    const nativeResult4 = ["a", "b", "c", "d", "e"].at(-100);
    console.assert(result4 === nativeResult4, {
        result: result4,
        message: "Test 4 no pasado",
    });
    
    const result5 = at(["a", "b", "c", "d", "e"], null);
    const nativeResult5 = ["a", "b", "c", "d", "e"].at(null);
    console.assert(result5 === nativeResult5, {
        result: result5,
        message: "Test 5 no pasado",
    });
    
    const result6 = at(["a", "b", "c", "d", "e"], "a");
    const nativeResult6 = ["a", "b", "c", "d", "e"].at("a");
    console.assert(result6 === nativeResult6, {
        result: result6,
        message: "Test 6 no pasado",
    });
    
    }
    