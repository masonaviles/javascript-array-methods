// ==========================================
// EVERY
// ==========================================

// It returns a Boolean value

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// ==========================================
// Syntax
// ==========================================

// // Arrow function
// every((element) => { ... } )
// every((element, index) => { ... } )
// every((element, index, array) => { ... } )

// // Callback function
// every(callbackFn)
// every(callbackFn, thisArg)

// // Inline callback function
// every(function callbackFn(element) { ... })
// every(function callbackFn(element, index) { ... })
// every(function callbackFn(element, index, array){ ... })
// every(function callbackFn(element, index, array) { ... }, thisArg)