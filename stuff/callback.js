const array1 = [1, 4, 9, 16];

// Pass a function to map
function foo(x) {
  return x + 2;
}
const map1 = array1.map(foo);

console.log(array1);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const map2 = [];
for (let i = 0; i < array1.length; i++) {
  map2[map2.length] = array1[i] + 2;
}

console.log(map2);
