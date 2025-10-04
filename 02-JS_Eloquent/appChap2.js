// function as notation
// console.log("The future says:", future());
// function future() {
//   return "You'll never have flying cars"
// }

// Arrow Function
// const roundTo = (n, step) => {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };

// console.log(roundTo(24,12))

// ///// Exercises 1 MINIMUM
// function min(a, b) {
//   if (a < b) {
//     return a 
//   } else {
//     return b
//   }
// }
// console.log(min(5,7))

// Exercise 2
// function isEven(num) {
//   let newNum = num % 2
//   return newNum
// }
// console.log(isEven(50))

//Exercise 3
function countBs(arg) {
  let count = 0;
  for (i = 0; i < arg.length; i++) {
    if (arg[i] === "b") {
      console.log("yes");
      count += 1;
    }
  } 
console.log(count);
}

countBs("babbboy");