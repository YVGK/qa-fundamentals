function evenNumbers(arr: number[]): number[] {
  const results: number[] = [];
  for (let n of arr) {
    if (n % 2 === 0) results.push(n);
  }
  return results;
}

function sumArray(arr: number[]): number {
  let result: number = 0;
  for (let n of arr) {
    result = result + n;
  }
  return result;
}

function reverseString(s: string): string {
  let result: string = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result = result + s.charAt(i);
  }
  return result;
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arraySum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const word: string = "Hello World";
console.log("Function evenNumbers, array [1,2,3,4,5,6,7,8,9]: ", evenNumbers(array));
console.log("Function sumArray, arraySum [1,2,3,4,5,6,7,8,9]: ", sumArray(arraySum));
console.log("Function reverseString, String Hello World: ", reverseString(word));
