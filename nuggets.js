// map function
const people = [
  {
    name: 'susy',
    age: 23,
    position: 'intern',
  },
  {
    name: 'John',
    age: 40,
    position: 'marketinghead',
  },
  {
    name: 'peter',
    age: 22,
    position: 'designer',
  },
  {
    name: 'bob',
    age: 24,
    position: 'intern',
  },
];

const getAges = (person) => person.age;
const getName = (person) => person.name;

const nameItem = people.map(getName);
// console.log(item);
const ageItem = people.map(getAges);

// console.log(names);
const resultName = document.querySelector('#person-name');
const resultAge = document.querySelector('#person-age');

resultName.innerHTML = nameItem.join('');
resultAge.innerHTML = ageItem.join('');

// Uniques Values

const newPeople = people.map((items) => {
  return {
    firstName: items.name.toUpperCase(),
    newAges: items.age + 20,
  };
});
console.log(newPeople);
const names = [...new Set(newPeople.map((item) => item.firstName))];
const newAge = [...new Set(newPeople.map((item) => item.newAges))];
const results = document.querySelector('#results');

results.innerHTML = names
  .map((items) => {
    return `<h2>${items}</h2>`;
  })
  .join('');
results.innerHTML = newAge
  .map((items) => {
    return `<p>${items}</p>`;
  })
  .join('');

const menu = [
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'steak',
    category: 'lunch',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const menuResult = document.querySelector('.result');
menuResult.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');

// Filter - returns a new arrays, can manipulate the size of new array (unlike map), return based on condition
// Find - return single instance, returns first match, if no match - undefined
// filter
const youngPeople = people.filter((person) => person.age < 30);
console.log(youngPeople);
const positionPeople = people.filter(
  (person) => person.position === 'developer'
);
console.log('filterpositions', positionPeople);
// find
const findPositions = people.find((items) => items.position === 'intern');
console.log('findposition', findPositions);
