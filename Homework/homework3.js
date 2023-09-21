'use strict';

//Homework 3

/* let value = prompt();
if (!isNaN(value)) {
    for (let i = 0; i < value; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }  
    } 
} else {
    console.log("Error, enter a valid value"); 
}
 */

/* const currentMaxValue = 4589;
let newValue = currentMaxValue.toString().split("").reverse().join("");
let reverseMaxValue = +newValue
console.log(reverseMaxValue);
console.log(typeof reverseMaxValue); */


/* 
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity); 
let result = 1;

for (let i = 0; i < productOfArray.length; i++) {
    result *= productOfArray[i];
}
console.log(result); 
*/

function sumOfOddNumbers(n){
    let sum= 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
          sum += i;
        }  
    }
    console.log(sum);
  }
sumOfOddNumbers(3)