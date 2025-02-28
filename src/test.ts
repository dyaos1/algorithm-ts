import shuffle from './utils/shuffle';
import binaryInsertionSort from './sort/binaryInsertionSort';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(test);

const result = binaryInsertionSort(test, (a, b) => a < b);
console.log(result);
