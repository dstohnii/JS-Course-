'use strict';

//Homework 5

// Task 1

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials = userNames.map((names) => names.split(" ")).map((word) => word.map((letter) => letter.slice(0, 1) + '.').join(""))
// initials.sort()
// // --------------------------------------------------------------------
// for (let i = 0; i < userNames.length; i++) {
//     let firstLetter = userNames[i].split(" ");
//     let word = '';
//     for (let j = 0; j < firstLetter.length; j++) {
//       let firstLetterWithDot = (firstLetter[j].slice(0, 1) + '.');
//       word += firstLetterWithDot; 
//     }
//     initials.sort().push(word)
// }
// --------------------------------------------------------------------
// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// Task 2

// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let vowels = ['а', 'о', 'у', 'і', 'ю', 'є', 'и', 'я', 'е', 'ї'];
// let filteredNames = userNames.filter(name => vowels.some(letter => name.toLocaleLowerCase().startsWith(letter)));

// console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена'] */

// Task 3

// const resultsArray = [1, 2, [3, [4]]];

// let productOfArray = resultsArray.flat(Infinity).reduce((a,b)=> a*b);

// console.log(productOfArray); // 24


// Task 4

// const priceData = {
//   Apples: '23.4',
//   BANANAS: '48',
//   oRAngGEs: '48.7584',
// };

// function optimizer(data) {
//     return Object.fromEntries(
//       Object.entries(priceData).map(([k, v]) => [k.toLowerCase(), parseFloat(v).toFixed(2)]));
//     }

// let updatedPriceData = optimizer(priceData);
// console.log(updatedPriceData);


// Task 5

// function durationBetweenDates(startDate = '01 Jan 2000', endDate = '01 Jan 2023', timePeriod = 'days') {
//   let startTime = Date.parse(startDate);
//   let endTime = Date.parse(endDate);
//   //const total = startTime <= endTime ? endTime - startTime : startTime - endTime;
//   const total = Math.abs(endTime - startTime)
//   switch (timePeriod) {
//     case 'days': return Math.floor( total/(1000*60*60*24) ).toString() + " " + timePeriod;
//     case 'hours': return Math.floor( (total/(1000*60*60)) % 24 ).toString() + " " + timePeriod;
//     case 'minutes': return Math.floor( (total/1000/60) % 60 ).toString() + " " + timePeriod;
//     case 'seconds': return Math.floor( (total/1000) % 60 ).toString() + " " + timePeriod;
//     default: return 0;
//   }
// }

// let result = durationBetweenDates('01 Jan 2023', '01 Jan 2000', 'days');
// console.log(result)