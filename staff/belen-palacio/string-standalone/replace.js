function replace(string, pattern, replacement) {
  let result = "";

  let position = 0;
  while (position < string.length) {
    let isFound = true;
    for (let i = 0; i < pattern.length; i++)
      if (string[position + i] !== pattern[i]) isFound = false;

    if (isFound) {
      result += replacement;
      position = position + pattern.length;
    } else {
      result += string[position];
      position++;
    }
  }

  return result;
}

{
  const test1 = "son las 4 de la mañana";
  const result1 = replace(test1, "mañana", "tarde");
  console.assert(test1 === "son las 4 de la mañana", {
    result: test1,
    message: "Test 1.1 no pasado",
  });
  console.assert(result1 === test1.replace("mañana", "tarde"), {
    result: result1,
    message: "Test 1.2 no pasado",
  });

  const test2 = "I think Ruth's dog is cuter than your dog!";
  const result2 = replace(test2, "Ruth's", "ferret");
  console.assert(test2 === "I think Ruth's dog is cuter than your dog!", {
    result: test2,
    message: "Test 2.1 no pasado",
  });
  console.assert(result2 === test2.replace("Ruth's", "ferret"), {
    result: result2,
    message: "Test 2.2 no pasado",
  });
}