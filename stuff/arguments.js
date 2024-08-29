function printArguments() {
  for (let i = 0; i < arguments.length; i++) {
    const argument = arguments[i];
    console.log(argument);
  }
}

printArguments("hello", "world", 1, 2, 3, true, false);
