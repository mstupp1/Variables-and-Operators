// Exercise 1: Syntax Errors
// Fix the syntax errors in the following code to make the functions work correctly.

// This function should greet a person by name
function greet(name) {
    return "Hello, " + name + "!";
}
// This function should calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// This function should check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
// Test your fixed functions
console.log(greet("World"));  // Should output: "Hello, World!"
console.log(calculateArea(5, 10));  // Should output: 50
console.log(isEven(4));  // Should output: true
console.log(isEven(7));  // Should output: false

export { greet, calculateArea, isEven };