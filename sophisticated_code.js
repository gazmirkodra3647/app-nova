/*
* Filename: sophisticated_code.js
* Content: Complex JavaScript code demonstrating various concepts and techniques
*/

// Create a class for representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of Person
const john = new Person("John", 25);
john.sayHello();

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17));

// Fibonacci series using recursion
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));

// Asynchronous function with Promises
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async function completed.');
    }, 2000);
  });
}

asyncFunction().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

// Demonstrate the use of arrow functions
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// Using the spread operator to concatenate arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Define a class for representing a circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getArea());
console.log(circle.getCircumference());

// Using try-catch for error handling
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero!');
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return NaN;
  }
}

console.log(divide(10, 2));
console.log(divide(5, 0));

// Implementing a basic sorting algorithm (Bubble Sort)
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(unsortedArray));

// ... (more code)
// ... (more lines of complex and sophisticated code)

// End of the code