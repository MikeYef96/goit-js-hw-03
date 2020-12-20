//ВЫВОДИМ СТРЕЛОЧКИ И СЧИТАЕМ ИХ КОЛИЧЕСТВО
//
// const strFn = (amount) => {
//   let str = "";
//   let randomNumber = 0;
//   for (let i = 0; i < amount; i++) {
//     randomNumber = parseInt(Math.random() * (4 - 1) + 1);
//     if (randomNumber === 1) {
//       str += "<";
//     } else if (randomNumber === 2) {
//       str += ">";
//     } else {
//       str += "-";
//     }
//   }
//   return str;
// };

// let randomString = strFn(250);

// const arrowsAmount = (str) => {
//   const arrowArr = ["<-", "->"];
//   let counter = 0;
//   for (let item of arrowArr) {
//     let tempString = str;
//     let indexOfString = tempString.indexOf(item);
//     while (indexOfString > -1 && tempString.length > 2) {
//       counter++;
//       tempString = tempString.substr(indexOfString + 2);
//       indexOfString = tempString.indexOf(item);
//     }
//   }
//   return counter;
// };
// console.log(randomString);
// console.log(arrowsAmount(randomString));

// =========================================================================================================
// let arr = [1, 2, "sdasd", 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];

// const addToArray = function (arr) {
//     let responseArray = [];
//     responseArray["int"] = [];
//     responseArray["float"] = [];
//     responseArray["string"] = [];
//     for (let item of arr) {
//         if (Number.isInteger(item)) {
//             responseArray["int"].push(item);
//         } else if (item % 1 !== 0 && typeof item === "number") {
//             responseArray["float"].push(item);
//         } else if (typeof item === "string") {
//             responseArray["string"].push(item);
//         }
//     }
//     return responseArray;
// };

// console.log(addToArray(arr));

// =========================================================================================================
//СРЕДНЕЕ АРЕФМЕТИЧЕСКОЕ МАССИВА
// const randomArr = (amount, min, max) => {
//   let num = [];
//   let sumItem = 0;

//   for (let i = 0; i < amount; i += 1) {
//     num.push(parseInt(Math.random() * (max - min) + min));
//   }
//   for (let item of num) {
//     sumItem += item;
//   }
//   return sumItem / amount;
// };

// console.log(randomArr(10, 1, 1000));
