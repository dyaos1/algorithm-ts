import quickHoar from '../../src/sort/quickSorts/hoar';
import quickLomuto from '../../src/sort/quickSorts/lomuto';
import shuffle from '../../src/utils/shuffle';

const td = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffle(td);

test('quickLomuto Test', () => {
  const arranged = quickLomuto(shuffled, (a, b) => a < b);
  expect(arranged[0]).toBe(1);
  expect(arranged[1]).toBe(2);
  expect(arranged[2]).toBe(3);
  expect(arranged[3]).toBe(4);
  expect(arranged[4]).toBe(5);
  expect(arranged[5]).toBe(6);
  expect(arranged[6]).toBe(7);
  expect(arranged[7]).toBe(8);
  expect(arranged[8]).toBe(9);
  expect(arranged[9]).toBe(10);

  const reversed = quickLomuto(shuffled, (a, b) => b < a);
  for (let i = 0; i < 10; i++) {
    expect(reversed[i]).toBe(10 - i);
  }
});

test('qhickHoar: upward test', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 오름차순 테스트
  for (let i = 10; i < 30; i++) {
    arr.push(i);
    shuffle(arr);
    quickHoar(arr, (a, b) => a < b);
    let k = 0;
    while (k < arr.length) {
      expect(arr[k]).toBe(k);
      k++;
    }
  }
});

test('qhickHoar: downward test', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 내림차순 테스트
  for (let i = 10; i < 30; i++) {
    arr.push(i);
    shuffle(arr);
    quickHoar(arr, (a, b) => b < a);
    let k = 0;
    while (k < arr.length) {
      expect(arr[k]).toBe(arr.length - k - 1);
      k++;
    }
  }
});

test('qhickHoar: duplicate possible sequence test', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 중복 수열 테스트
  for (let i = 10; i < 30; i++) {
    arr.push(i);
    if (Math.random() > 0.8) {
      arr.push(i);
    }
    shuffle(arr);
    quickHoar(arr, (a, b) => a < b);
    let k = 0;
    while (k < arr.length - 1) {
      expect(arr[k] <= arr[k + 1]).toBe(true);
      k++;
    }
  }
});
