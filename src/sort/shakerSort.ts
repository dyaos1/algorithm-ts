export default function shakerSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
) {
  const len = seq.length;
  let upward = true;
  let left = 0;
  let right = len - 1;
  let cursor = 0;

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      upward = true;
    } else {
      upward = false;
    }

    if (upward) {
      cursor = 0;
      while (cursor < right) {
        const a = seq[cursor];
        const b = seq[cursor + 1];
        if (!callback(a, b)) {
          seq[cursor] = b;
          seq[cursor + 1] = a;
        }
        cursor++;
      }
      right--;
    } else {
      cursor = right;
      while (cursor > left) {
        const a = seq[cursor - 1];
        const b = seq[cursor];
        if (!callback(a, b)) {
          seq[cursor - 1] = b;
          seq[cursor] = a;
        }
        cursor--;
      }
      left++;
    }
  }
  return seq;
}
