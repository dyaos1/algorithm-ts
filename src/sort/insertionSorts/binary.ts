export default function insertionSortBinary(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  let currentIdx = 1;
  while (currentIdx < seq.length) {
    let left = 0;
    let right = currentIdx - 1;
    while (left <= right) {
      const center = Math.floor((left + right) / 2);
      if (seq[currentIdx] === seq[center]) {
        left = center;
        break;
      } else if (callback(seq[currentIdx], seq[center])) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }

    const position = left;
    const tempValue = seq[currentIdx];

    let shiftingIdx = currentIdx;
    while (position < shiftingIdx) {
      seq[shiftingIdx] = seq[shiftingIdx - 1];
      shiftingIdx--;
    }
    seq[position] = tempValue;

    currentIdx++;
  }
  return seq;
}
