// ==========================================
// INCLUDES
// ==========================================

// returning true or false

// includes(searchElement)
// includes(searchElement, fromIndex)

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

var pets = ['dog', 'cat', 'hamster'];

console.log(pets.includes('dog'));
// output: true
console.log(pets.includes('dinosaur'));
// output: false