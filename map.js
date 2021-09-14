// ==========================================
// MAP
// ==========================================

// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]

// Using forEach:
var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

// Using map:
var officersIds = officers.map(function (officer) {
  return officer.id
});

// same but with an arrow function:
const officersIds = officers.map(officer => officer.id);
