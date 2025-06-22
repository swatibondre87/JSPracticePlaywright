function greet() {
  console.log ("Hello,!");
}

greet();  // Output: Hello,!
console.log(typeof greet);


function greetHello(name) {
  return "Hello, " + name + "!";
}

console.log(greetHello("John"));  // Output: Hello, John!
console.log(typeof greetHello);