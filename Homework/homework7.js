'use strict';

//Homework 6

// Task 1

// function addThemAll(...args) {
//   let addThemAll = 0;
//   for (let arg of args) addThemAll += arg;
//   return addThemAll;
// }

// let sum = addThemAll(4, 9, 16, 25);
// console.log(sum)
function addThemAll(...args) {
  let addThemAll = 0;
  for (let arg of args) addThemAll += arg;
  return addThemAll;
}

let sum = addThemAll(4, 9, 16, 25);
console.log(sum)

// Task 2

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(2))