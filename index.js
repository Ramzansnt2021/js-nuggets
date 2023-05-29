// loop through function values

function greet(name) {
  console.log('Hello there' + name);
}
const personsName = ['Bob', 'Anna', 'Susy'];
for (let i = 0; i <= personsName.length - 1; i++) {
  console.log(greet(personsName[i]));
}

// loop through function values with return

const wallHeight = 80;
const wallWidth = 1140;

function calculate(value) {
  return value * 2.54;
}

const width = calculate(wallWidth);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

// Functions Expressions

const calculateTotal = function (subtotal, tax) {
  return subtotal + tax;
};

const order1 = calculateTotal(500, 2);
const order2 = calculateTotal(200, 12);
const order3 = calculateTotal(900, 42);

console.log(order1, order2, order3);

const car = {
  make: 'Dodge',
  model: 'Challenger',
  year: 2007,
  colors: ['black', 'red'],
  hybrid: false,
  drive: function () {
    console.log('diving...');
  },
  stop() {
    console.log('Stopped!!!');
  },
};

console.log(car.make);
console.log(car.model);
car.drive();
car.stop();
