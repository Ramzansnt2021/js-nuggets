// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
  {
    name: 'susy',
    age: 23,
    position: 'intern',
    salary: 100,
  },
  {
    name: 'John',
    age: 40,
    position: 'marketinghead',
    salary: 500,
  },
  {
    name: 'peter',
    age: 22,
    position: 'designer',
    salary: 200,
  },
  {
    name: 'bob',
    age: 24,
    position: 'intern',
    salary: 900,
  },
  {
    name: 'Kate',
    age: 24,
    position: 'intern',
    salary: 908,
  },
];

const dailyTotal = staff.reduce((total, person) => {
  // console.log(`Initialized: ${total}`);
  // console.log(`Current:${person.salary}`);
  total += person.salary;
  // console.log(`Total:${total}`);
  return total;
}, 0);
// console.log(dailyTotal);

// Reduce - Objects
// cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let { totalItem, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItem += amount;
    total.cartTotal += amount * price;
    return total;
  },
  { totalItem: 0, cartTotal: 0 }
);

// cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(totalItem, cartTotal);

// github repo example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  const dataSets = await response.json();
  // console.log(dataSets);
  const newData = dataSets.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] += 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
