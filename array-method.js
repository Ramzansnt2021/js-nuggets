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

// @forEach - forEach(): loop and iterate all of the values within given an array of any type of item and also object w.r.t it's length. It also allows us to write cleaner, more readable code than the for loop.

food.forEach((items) => {
  console.log(items);
});
console.log('Original Array: ' + food);

// @of() - of(): Creates a new Array with specified elements regardless of type. let n = Array.of(2,3,"Shane", 44)

let food_of = Array.of(food);
console.log('of() :', food_of);
console.log('Original Array: ' + food);

// @map() - map(): Returns a new Array from existing array with modified elements via calculations done in the function.
const bananas = food.map((item) => {
  console.log(item);
});
console.log('Original Array: ' + food);

const duplicateFood = food.map((item) => item + item);
console.log(duplicateFood);
console.log('Original Array: ' + food);

// @filter() -  filter(): Returns a new Array, with elements that pass a condition provided in the function.
const fruits = food.filter((items) => items.length <= 5);
console.log(fruits);
console.log('Original Array: ' + food);

//@find() - find(): Returns value of the first element that passed the condition in the function provided.
const looking_for_element_find = food.find((item) => item === 'eggs');
console.log(looking_for_element_find);
console.log('Original Array: ' + food);

//@findIndex() - findIndex(): Returns the index of the first element that passes a condition in the function.

const looking_for_element_find_index = food.findIndex(
  (item) => item === 'eggs'
);
console.log(looking_for_element_find_index);
console.log('Original Array: ' + food);

//@indexOf() - indexOf(): Provide SearchValue will return the index. If searchValue not present will return -1.
const looking_for_element_index_of = food.indexOf('eggs');
console.log(looking_for_element_index_of);
console.log('Original Array: ' + food);

//@lastIndexOf -  lastIndexOf: Same as indexOf starts from backward.
const looking_for_element_last_index_of = food.lastIndexOf('eggs');
console.log(looking_for_element_last_index_of);
console.log('Original Array: ' + food);

// @some - some(): Returns True if one element passes condition in the function.
const looking_for_element_some = food.some((item) => item === 'eggs');
console.log(looking_for_element_some);

// @every - every(): Return True if all elements passes condition in the function.
const looking_for_element_every = food.every((item) => item !== 'eggs');
console.log(looking_for_element_every);
console.log('Original Array: ' + food);

// @includes() - includes(): Returns T or F. If SearchValue exists in the array.
const looking_for_element_includes = food.includes((item) => item === 'eggs');
console.log(looking_for_element_includes);
console.log('Original Array: ' + food);

const foodStr = food.toString();
console.log(foodStr);
console.log('Original Array: ' + food);

// @join() - join(): Converts all elements into a string. Can play around with the ",".
const foodJoin = food.join(', ');
console.log(foodJoin);
console.log('Original Array: ' + food);

//@fill - fill(): Replace all elments in an array with one static value. Can also specify index to start from.
const foodFill = food.fill('onion', 2, 5);
console.log(foodFill);
console.log('Original Array: ' + food);

const foodCopy = food.copyWithin(2, 4, 6);
console.log(foodCopy);
console.log('Original Array: ' + food);

// @slice - slice(): Returns shallow copy of the selected value to slice. Simialr to slicing a cake. (startIndex, stopBeforeIndex)
const foodSlice = food.slice(1, 4);
console.log(foodSlice);
console.log('Original Array: ' + food);

// @splice - splice(): Deletes from array. OR Adds new value to array. (startIndex, deleteHowMany, addNewValues)
const foodSplice = food.splice(0, 2, 'eggs', 'milk');
console.log(foodSplice);
console.log('Original Array: ' + food);

// Builtin array function  sort
// @sort - sort(): Sorts all elements alphabetically. For numeric values, perform subtraction. (a,b)=>a-b
const foodSort = food.sort();
console.log(foodSort);
console.log('Original Array: ' + food);

const numbers = [88, 9, 66, 5, 11, 6, 8, 2, 1];
console.log('Original Array:', numbers);
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

// @reverse() - reverse(): Reverses all elements in an array.
const num = numbers.reverse();
console.log(num);

const str = '11234';

// @from() - from(): Creates a new Array from array-like or iterable object. let list = new Set([2,4,643]) > let n = Array.from(list)
const numberFrom = Array.from(str, (item) => Number(item));
console.log(numberFrom);

// @isArray() - isArray(): Returns True if given value is array.
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

//@reducer - reduce: Reduces array to single value. (total, item) the value is stored in total.
function reducer(previousValue, currentValue) {
  return previousValue + currentValue;
}

const sum = numbers.reduce(reducer, 0);
console.log(sum);

//@reducerRight - reduceRight: Same as reduce but starts from Right to Left.
const getSum = numbers.reduceRight(reducer, 0);
console.log(getSum);

// @flat() - flat(): If array has array in it. It will flatten and remove the brackets from within. [1, [2]] = [1, 2]
const getFlat = food.flat();
console.log(getFlat);

// @flatMap() - flatMap(): Returns new array by applying condition from function.
const foodCart = [
  ['apple', 'carrot'],
  ['pear', 'brinjal'],
  ['banana', 'tomato', 'potato', 'guava'],
];
const resultFoodCart = foodCart
  .map((items) => {
    return [items[0] + items[1]];
  })
  .flat();
const resultFoodCart_flatMap = foodCart.flatMap((items) => {
  return [items[0] + items[1]];
});
console.log(resultFoodCart_flatMap);

//@pop() - pop(): Removes last element.
const food_pop = food.pop();
console.log(food_pop);
console.log('Original array', food);

//@push() - push():Add value to the last spot.
const food_push = food.push('Sweet Potato');
console.log(food_push);
console.log('Original array', food);

//@shift - shift(): Removes element from first spot.
const food_shift = food.shift();
console.log(food_shift);
console.log('Original array', food);

//@unshift() - unshift(): Adds value to the first spot.
const food_unshift = food.unshift('Potato');
console.log(food_unshift);
console.log('Original array', food);

// @at - at() : The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"
