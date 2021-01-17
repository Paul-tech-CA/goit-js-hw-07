// сгенерировать массив случ.чисел +  перевести четные в нечетные
// получить максимальное нечетное число +  не дольше 1 строки;

// const generateRandomArr = (count, min, max, callback) => {
//     let arr = [];
//     for (let i = 0; i < count; i++)
//       arr.push(parseInt(Math.random() * (max - min) + min));
//     if (callback !== undefined) return callback(arr);
//     return arr;
//   };

//   console.log(
//     generateRandomArr(100, 10, 100, arr =>
//       Math.max(...arr.map(item => ++item).filter(item => item % 2 !== 0)),
//     ),
//   );

// const baseString = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const generateRandomString = (length, callback) => {
//   let randomValue = '';
//   for (let i = 0; i < length; i++)
//     randomValue += baseString[parseInt(Math.random() * baseString.length)];

//   if (callback !== undefined) return callback(randomValue);
//   return randomValue;
// };

// const tempFn = str => {
//   const arrayNum = str
//     .split('')
//     .filter(item => !Number.isNaN(Number(item)))
//     .map(item => (item = parseInt(item)));
//   let total = 0;
//   arrayNum.forEach(element => {
//     total += element;
//   });
//   return total / arrayNum.length;
// };

// console.log(generateRandomString(250, tempFn));

// =======================================
// const sum = (num) => {
//     let value = num;
//     const fnSum = (num2) => {
//         value += num2;
//         return { s: fnSum, value };
//     }

//     return { value, s: fnSum };

// }

// console.log(sum(1).s(2).s(3).s(15).value); // 6
