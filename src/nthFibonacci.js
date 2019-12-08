// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1   0, 1, 1
// nthFibonacci(3); // => 2   0, 1, 1, 3
// nthFibonacci(4); // => 3   0, 1, 1, 2, 3
// nthFibonacci(5); // => 5   0, 1, 1, 2, 3, 5
// nthFibonacci(6); // => 8   0, 1, 1, 2, 3, 5, 8
// etc...

var nthFibonacci = function(n) {
  // Your code here

  if (n < 2) {
    return n;
  } else {
    return nthFibonacci(n - 2) + nthFibonacci(n - 1);
  }

};

