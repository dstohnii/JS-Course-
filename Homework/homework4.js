'use strict';

//Homework 4

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };

let updatedPriceData = {};

for (let item in priceData) {
  let newKey = item.toLowerCase();
  let newValue = parseFloat(priceData[item]).toFixed(2);
  updatedPriceData[newKey] = newValue;
}

console.log(updatedPriceData);
