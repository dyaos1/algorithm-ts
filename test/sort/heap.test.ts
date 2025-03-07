import {heapSort} from '../../src/sort/heap';
import shuffle from '../../src/utils/shuffle';

test('heapSort Test: upward', () => {
  const testArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  for (let i = 20; i < 50; i++) {
    testArr.push(i);
    shuffle(testArr);
    let k = 0;
    const sorted = heapSort(testArr, (a, b) => a < b);
    while (k <= i) {
      expect(sorted[k]).toBe(k);
      k++;
    }
  }
});

test('heapSort Test: downward', () => {
  const testArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  for (let i = 20; i < 50; i++) {
    testArr.push(i);
    shuffle(testArr);
    let k = 0;
    const sorted = heapSort(testArr, (a, b) => a > b);
    while (k <= i) {
      expect(sorted[k]).toBe(i - k);
      k++;
    }
  }
});
