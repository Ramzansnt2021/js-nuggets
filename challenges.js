// Multiplied nested functions values
// example console.log(example(1,2),(1,3),(2,4))
// return 1*1*2 + 2*3*4
console.log('Challenge No. 1');
// function nestValues(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       console.log(a, b, c, d, e, f);
//       return a * c * e + b * d * f;
//     };
//   };
// }

const nestValues = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

console.log(nestValues(1, 2)(1, 3)(2, 4));
console.log(nestValues(1, 7)(1, 5)(2, 4));
console.log(nestValues(1, 2)(0, 3)(0, 4));

console.log('Challenge No. 2');

// Multiplied argument in different ways
// 4*5=20 , 1*2*3*5=30 , 2+0*4*2 = 8

function multiplied() {
  const args = [...arguments];
  const result = args.reduce((total, item) => {
    return item ? item * total : item + total;
  }, 1);
  return result;
}
console.log(multiplied(4, 5));
console.log(multiplied(1, 2, 3, 5));
console.log(multiplied(2, 0, 4, 2));

console.log('Challenge No. 3');
// How many days between the dates
const date1 = new Date('March 3, 2021');
const date2 = new Date('March 3, 2023');

// const getDays = (date1, date2) => {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const time2 = date2.getTime(); //convert days in seconds
//   const time1 = date1.getTime(); //convert days in seconds
//   let time = time2 - time1; // getDays in microseconds
//   time = time / oneDay; // convert seconds to days
//   time = Math.round(Math.abs(time));
//   return time;
// };

const getDays = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));

console.log(getDays(date1, date2));

console.log('Challenge No. 4');
// Count match in array
const first = [89, 66, 89, 66, 77, 44, 77];
const second = [3, 3, 2, 8, 7, 6, 5];

const count = (data) => {
  return data.reduce((total, items, index) => {
    const match = items === data[index + 2] && data[index + 1];
    if (match) return total + 1;
    return total;
  }, 0);
};

console.log(count(first));

console.log('Challenge No. 5');
