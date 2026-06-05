function countWords(s: string): number {
  let total: number = 0;
  const myWords: string[] = s.split(" ");
  for (const n of myWords) {
    // bigger then 0 due to words like I , A
    if (n.length > 0) {
      total = total + 1;
    }
  }
  return total;
}

function findMax(arr: number[]): number {
  let maxNumber: number = Number.MIN_SAFE_INTEGER;
  if (arr.length > 0) {
    for (const n of arr) {
      if (n >= maxNumber) {
        maxNumber = n;
      }
    }
  } else {
    // returns infinty beacuse throw error is stopping the program
    maxNumber = Infinity;
  }
  return maxNumber;
}
const sentence: string = "I am A Automation engineer ";
const normalArray: number[] = [2, 6, 1, 2, 8, 5, 4, 7];
const emptyArray: number[] = [];
const negativeArray: number[] = [-5, -2, -6, -8, -1, -6];

console.log(`String '${sentence}' has ${countWords(sentence)} words`);
console.log(`The biggest number in normalArray is ${findMax(normalArray)}`);
console.log(`The biggest number in emptyArray is ${findMax(emptyArray)}`);
console.log(`The biggest number in negativeArray is ${findMax(negativeArray)}`);
