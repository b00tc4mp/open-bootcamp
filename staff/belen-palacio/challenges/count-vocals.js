function countVocals(chain) {
  var counter = 0
  var vocals = ['a', 'e', 'i', 'o', 'u', 'é', 'A', 'ü']

    
  for (var i = 0; i < chain.length; i++) {
    for (var j = 0; j < vocals.length; j++) {
        if (chain[i] === vocals[j]) { 
          counter++ 
        }
    }
  }

  return counter

}

var result1 =  countVocals('hola')
console.assert(result1 === 2, {result: result1, message: 'Test 1 no ha pasado'})

var result2 =  countVocals('adios')
console.assert(result2 === 3, {result: result2, message: 'Test 2 no ha pasado'})

var result3 =  countVocals('olé')
console.assert(result3 === 2, {result: result3, message: 'Test 3 no ha pasado'})

var result4 =  countVocals('Kun Agüero')
console.assert(result4 === 5, {result: result4, message: 'Test 4 no ha pasado'})