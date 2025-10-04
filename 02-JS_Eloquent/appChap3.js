// Exercise 1 Sum of range
function range(start, end) {
  let allNumbers = []

  for (let i = 0; i <start.length; i++) {
    allNumbers.push(start[i]);  
  }

  for (let i = 0; i <end.length; i++) {
    allNumbers.push(end[i]);
  }
  return allNumbers.sort((a,b) => (a-b));
}

const start = [5,4,3,2,1,-1, -5];
const end = [6,3,1];

console.log(range(start,end));


// Exercise 2 A List