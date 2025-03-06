import shellSort from '../../src/sort/insertionSorts/shell';
import shuffle from '../../src/utils/shuffle';

const td = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffle(td);

test('shellSort Test', () => {
  const arranged = shellSort(shuffled, (a, b) => a < b);
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

  const reversed = shellSort(shuffled, (a, b) => b < a);
  for (let i = 0; i < 10; i++) {
    expect(reversed[i]).toBe(10 - i);
  }
});
