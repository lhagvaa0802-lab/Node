// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 1));

// function subtract(a, b) {
//   return a - b;
// }

// console.log(subtract(5, 1));

// module.exports = {
//   add: add,
//   subtract: subtract,
// };

// const print = () => {
//   console.log("Say hello");
// };

// module.exports = { print };

// const isEven = (a) => {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// module.exports = { isEven };

const toUpper = (text) => {
  return text.toUpperCase();
};
const tolength = (text) => {
  return text.length;
};

module.exports = { toUpper, tolength };
