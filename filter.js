// ==========================================
// FILTER
// ==========================================

// What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});

// ==========================================

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]