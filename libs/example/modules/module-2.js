console.log('module 2')

const name = "Fulano"

// Create a function named "multiply":
function multiply2(x, y) {
  return x * y;
}

// Create an array named "fruits":
const fruits = ["Mango", "Apple", "Orange", "Lemon"];

// Export the three statements above:
export { multiply2, fruits, name as myName };