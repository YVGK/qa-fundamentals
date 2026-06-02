function countWords(s: string): number {
  let total: number = 0;
  const myWords: string[] = s.split(" ");
  for (const n of myWords) {
    if (n.length > 1) {
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
    console.log("Array is empty");
    maxNumber = Number.MIN_VALUE;
    // returns MIN_VALUE;
  }

  return maxNumber;
}
