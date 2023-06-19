const food = [
  'apple',
  'carrot',
  'pear',
  'brinjal',
  'banana',
  'tomato',
  'potato',
  'guava',
];

console.log('Original Array: ' + food);

food.forEach((items) => {
  console.log(items);
});
console.log('Original Array: ' + food);

const bananas = food.map((item) => {
  console.log('Bananas: ' + item);
});
console.log('Original Array: ' + food);

const duplicateFood = food.map((item) => item + item);
console.log(duplicateFood);
console.log('Original Array: ' + food);

const fruits = food.filter((items) => items.length <= 5);
console.log(fruits);
console.log('Original Array: ' + food);

// const looking_for_element = food.find((item) => item === 'eggs');
// console.log(looking_for_element);
// console.log('Original Array: ' + food);

// const looking_for_element = food.findIndex((item) => item === 'eggs');
// console.log(looking_for_element);
// console.log('Original Array: ' + food);

// const looking_for_element = food.indexOf('eggs');
// console.log(looking_for_element);
// console.log('Original Array: ' + food);

// const looking_for_element = food.some((item) => item === 'eggs');
// console.log(looking_for_element);

// const looking_for_element = food.every((item) => item !== 'eggs');
// console.log(looking_for_element);
// console.log('Original Array: ' + food);

// const looking_for_element = food.includes((item) => item === 'eggs');
// console.log(looking_for_element);
// console.log('Original Array: ' + food);

const foodStr = food.toString();
console.log(foodStr);
console.log('Original Array: ' + food);

const foodJoin = food.join(', ');
console.log(foodJoin);
console.log('Original Array: ' + food);

const foodFill = food.fill('onion', 2, 5);
console.log(foodFill);
console.log('Original Array: ' + food);

const foodCopy = food.copyWithin(2, 4, 6);
console.log(foodCopy);
console.log('Original Array: ' + food);

const foodSlice = food.slice(1, 4);
console.log(foodSlice);
console.log('Original Array: ' + food);

const foodSplice = food.splice(0, 2, 'eggs', 'milk');
console.log(foodSplice);
console.log('Original Array: ' + food);

// Builtin array function  sort
const foodSort = food.sort();
console.log(foodSort);
console.log('Original Array: ' + food);

const numbers = [88, 9, 66, 5, 11, 6, 8, 2, 1];
console.log('Original Array:', numbers);
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

const num = numbers.reverse();
console.log(num);

const str = '11234';

const numberFrom = Array.from(str, (item) => Number(item));
console.log(numberFrom);

let check_array = Array.isArray(food);
console.log(check_array);
check_array = Array.isArray(str);
console.log(check_array);

const new_array = numbers.valueOf();
console.log('new_array: ', new_array);

const foodEntries = food.entries();
for (let elements of foodEntries) {
  console.log(elements);
}

function reducer(previousValue, currentValue) {
  return previousValue + currentValue;
}

const sum = numbers.reduce(reducer, 0);
console.log(sum);

const getSum = numbers.reduceRight(reducer, 0);
console.log(getSum);

const getFlat = food.flat();
console.log(getFlat);

const foodCart = [
  ['apple', 'carrot'],
  ['pear', 'brinjal'],
  ['banana', 'tomato', 'potato', 'guava'],
];
// const resultFoodCart = foodCart
//   .map((items) => {
//     return [items[0] + items[1]];
//   })
//   .flat();
const resultFoodCart = foodCart.flatMap((items) => {
  return [items[0] + items[1]];
});
console.log(resultFoodCart);
