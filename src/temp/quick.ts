export default function quickSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
): number[] {
  if (seq.length < 2) {
    return [...seq];
  }
  const pivotValue = findPivot(seq)[0];
  let lCursor = 0;
  let rCursor = seq.length - 1;

  while (lCursor <= rCursor) {
    while (callback(seq[lCursor], pivotValue)) {
      lCursor++;
    }
    while (callback(pivotValue, seq[rCursor])) {
      rCursor--;
    }
    if (lCursor <= rCursor) {
      [seq[lCursor], seq[rCursor]] = [seq[rCursor], seq[lCursor]];
      if (seq[rCursor] === pivotValue) {
        lCursor++;
      } else if (seq[lCursor] === pivotValue) {
        rCursor--;
      } else {
        lCursor++;
        rCursor--;
      }
    }
  }

  const leftHalf = seq.slice(0, lCursor - 1);
  const rightHalf = seq.slice(rCursor + 1, seq.length);

  const leftArr = quickSort(leftHalf, callback);
  const rightArr = quickSort(rightHalf, callback);

  return [...leftArr, pivotValue, ...rightArr];
}

function findPivot(seq: number[]) {
  const middle = Math.floor(seq.length / 2);
  return [seq[middle], middle];
}
