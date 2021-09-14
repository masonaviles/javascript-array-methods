// ==========================================
// FIND
// ==========================================

// returns the value of the first element in the provided array that satisfies the provided testing function

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


// ==========================================
// Syntax
// ==========================================

// // Arrow function
// find((element) => { ... } )
// find((element, index) => { ... } )
// find((element, index, array) => { ... } )

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function callbackFn(element) { ... })
// find(function callbackFn(element, index) { ... })
// find(function callbackFn(element, index, array){ ... })
// find(function callbackFn(element, index, array) { ... }, thisArg)