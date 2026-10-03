// Basic Calculator App

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Test calculations
console.log("Basic Calculator");
console.log("================");
console.log(`10 + 5 = ${add(10, 5)}`);
console.log(`10 - 5 = ${subtract(10, 5)}`);
console.log(`10 * 5 = ${multiply(10, 5)}`);
console.log(`10 / 5 = ${divide(10, 5)}`);
console.log(`10 / 0 = ${divide(10, 0)}`);
