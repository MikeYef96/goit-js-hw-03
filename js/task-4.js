"use strict";

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  for (let salary in employees) {
    if (employees[salary]) {
      totalSalary += employees[salary];
    }
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 15000,
  })
); // 15250
