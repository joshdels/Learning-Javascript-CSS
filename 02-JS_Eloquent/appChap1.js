// // Exercise 1 Looping a triangle
// line = ""

// for (let i=0; i <= 7; i++) {
//   line += "#";
//   console.log(line);
// }

// // Exercisee 2 Fizzubzz
// let repeat = 1;
// while (repeat < 100 ) {
//   console.log(repeat);
//   if (repeat % 3 === 0 && repeat % 5 == 0 ) {
//     console.log("FizzBuzz");
//   }
//   else if (repeat % 3 === 0 ) {
//     console.log("Fizz");
//   } else if (repeat % 5 ===0) {
//     console.log("Buzz");
//   }
//   repeat += 1;
// }

//Exercise 3 ChessBoard
for (let i = 0; i <= 7; i++) {
  if (i % 2 === 0) {
    console.log("# # # #")
  } else {
    console.log(" # # # #")
  }
}