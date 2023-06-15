// Array.form - NOT ON PROTOTYPE

// from - return Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array -string, nodeList, Set

const udemy = 'udemy';

const text = document.querySelectorAll('.text');

const newText = Array.from(text).find((item) => item.textContent === 'person');
