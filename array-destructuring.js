// faster/easier way to access/unpack variable from arrays, object (later videos);

const fruits = ['orange', 'banana', 'lemon', 'apple'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly] = friends;
console.log(john, peter, bob, anna, kelly);

//  object destructuring

const bobTheBuilder = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  job: 'construction worker',
  siblings: {
    sisters: 'jane',
  },
};

const { first, last, city, zip } = bobTheBuilder;
console.log('Objects:', first, last, city, zip);

function getPersons({
  first,
  last,
  city,
  siblings: { sisters: favoriteSiblings },
}) {
  // const { first, last, city } = person;
  console.log('Function based:', first, last, city, favoriteSiblings);
}
getPersons(bobTheBuilder);

const [one, second, ...restOfTheFruits] = fruits;
console.log(one, restOfTheFruits);

const { job, ...rest } = bobTheBuilder;
console.log(job, rest);
