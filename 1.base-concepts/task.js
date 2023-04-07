"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return arr;
  }

  if (D === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  arr.push((-b + Math.sqrt(D)) / (2 * a));
  arr.push((-b - Math.sqrt(D)) / (2 * a));
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}