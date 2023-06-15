// Spread Operator
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and COPY them received

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

// reference
// copy
const friends = [...boys, bestFriend, ...girls];
console.log(friends);
const newFriend = [...friends];
newFriend[0] = 'nancy';
console.log(newFriend);
// ES2018 - ES8 Objects

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person };
