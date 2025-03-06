import quickHoar from './sort/quickSorts/hoar';
import shuffle from './utils/shuffle';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(arr);
console.log(arr);
// const arr = [7, 2, 9, 1, 4, 3, 5, 6, 8, 10];

const result = quickHoar(arr, (a, b) => a < b);

console.log(result);
