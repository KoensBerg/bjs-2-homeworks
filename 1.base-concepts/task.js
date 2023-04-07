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
  // годовая ставка, первоначальный взнос, сумма кредита, срок кредита (мес.)

  // Приведём к числу
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);
  countMonths = Math.floor(countMonths);

  // Проверим значения аргументов на корректность
  if (!checkArguments(percent, contribution, amount, countMonths)) {
    return false;
  }

  let S = amount - contribution;  // тело кредита
  let P = percent / 100 / 12;     // ставка в месяц (0--1)

  let monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
  let totalPayment = +(monthlyPayment * countMonths).toFixed(2);

  return totalPayment;
}

// Функция проверки аргументов на корректность
function checkArguments(percent, contribution, amount, countMonths) {
  if (Number.isNaN(percent) ||
    Number.isNaN(contribution) ||
    Number.isNaN(amount) ||
    Number.isNaN(countMonths) ||
    contribution > amount ||
    percent <= 0 ||
    contribution < 0 ||
    amount < 0 ||
    countMonths <= 0) {
    return false;
  }
  return true;
}