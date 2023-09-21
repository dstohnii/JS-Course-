'use strict';

//Homework 4

// Task 1


/* function iterarativeOddSumTo(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0){
      sum += i;
    }
  }
  return sum;
}

let result = iterarativeOddSumTo(3);
console.log(result) */


// Task 2

/* function recurSum(n) {
  if (n <= 1)
    return 1
  if (n % 2 === 0)
    return recurSum(n-1)
  return n + recurSum(n-2)
}
  
  let result = recurSum(9);
  console.log(result); */