// NO CHATGPT

function countVocals(chain) {
  var counter = 0;
  var vocals = ["a", "e", "i", "o", "u", "é", "A", "ü", "Á"];

  for (var i = 0; i < chain.length; i++) {
    var character = chain[i];

    for (var x = 0; x < vocals.length; x++) {
      var vocal = vocals[x];

      if (vocal === character) {
        counter++;
      }
    }
  }

  return counter;
}

debugger;
var result1 = countVocals("hola");
console.assert(result1 === 2, {
  result: result1,
  message: "Test 1 no ha pasado",
});

var result2 = countVocals("adios");
console.assert(result2 === 3, {
  result: result2,
  message: "Test 2 no ha pasado",
});

var result3 = countVocals("olé");
console.assert(result3 === 2, {
  result: result3,
  message: "Test 3 no ha pasado",
});

var result5 = countVocals("Ávila");
console.assert(result5 === 3, {
  result: result5,
  message: "Test 5 no ha pasado",
});
