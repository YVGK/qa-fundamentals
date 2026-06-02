function countWords(s: string): number {
  let total: number = 0;
  const trimedString: string = s.replace(/\s+/g, "");
  for (const n of trimedString) {
    total = total + 1;
    console.log(n, total);
  }
  return total;
}

console.log(countWords("Hello   world  "));

function findMax(arr: number[]): number {
  let maxNumber: number = 0;
  if (arr.length > 0) {
    for (const n of arr) {
      if (n > maxNumber) {
        maxNumber = n;
      }
    }
  }

  return maxNumber;
}
const array: number[] = [1, 5, 8, 3, 1, 6, 2];
const array2: number[] = [];
console.log("The max Number is ", findMax(array));
console.log("The max Number is ", findMax(array2));
