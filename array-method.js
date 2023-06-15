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

food.forEach((items) => {
  console.log(items);
});

const bananas = food.map((item) => {
  console.log('Bananas: ');
});

const duplicateFood = food.map((item) => item + item);
console.log(duplicateFood);

const fruits = food.filter((items) => items.length <= 5);
console.log(fruits);

// const looking_for_element = food.find((item) => item === 'eggs');
// console.log(looking_for_element);

// const looking_for_element = food.findIndex((item) => item === 'eggs');
// console.log(looking_for_element);

// const looking_for_element = food.indexOf('eggs');
// console.log(looking_for_element);

// const looking_for_element = food.some((item) => item === 'eggs');
// console.log(looking_for_element);

// const looking_for_element = food.every((item) => item !== 'eggs');
// console.log(looking_for_element);

// const looking_for_element = food.includes((item) => item === 'eggs');
// console.log(looking_for_element);

const foodStr = food.toString();
console.log(foodStr);

const foodJoin = food.join(', ');
console.log(foodJoin);

const foodFill = food.fill('onion', 2, 5);
console.log(foodFill);
