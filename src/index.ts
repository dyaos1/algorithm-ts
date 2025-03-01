import shellSort from './sort/shellSort';
import shuffle from './utils/shuffle';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
shuffle(test);
console.log(test);

const result = shellSort(test, (a, b) => a < b);
console.log(result);
