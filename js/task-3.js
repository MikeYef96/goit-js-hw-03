"use strict";

const findBestEmployee = function (employees) {
  const valuesArr = Object.values(employees);

  const maxVal = Math.max(...valuesArr);
  const maxValIndex = valuesArr.indexOf(maxVal);
  const maxEmployeeVal = Object.keys(employees);
  return maxEmployeeVal[maxValIndex];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
    puge: 130000,
  })
); // puge

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
