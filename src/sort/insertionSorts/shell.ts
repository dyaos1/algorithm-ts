export default function shellSort(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  let gap = 1;
  while (gap < seq.length / 9) {
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    shellSortWithGap(seq, callback, gap);
    gap = (gap - 1) / 3;
  }
  return seq;
}

function shellSortWithGap(
  seq: number[],
  callback: (f: number, b: number) => boolean,
  gap: number,
) {
  for (let startIdx = 0; startIdx < gap; startIdx++) {
    for (
      let insertionIdx = startIdx + gap;
      insertionIdx < seq.length;
      insertionIdx += gap
    ) {
      const valueToInsert = seq[insertionIdx];
      let shiftingIdx = insertionIdx;
      while (
        shiftingIdx >= gap &&
        !callback(seq[shiftingIdx - gap], valueToInsert)
      ) {
        seq[shiftingIdx] = seq[shiftingIdx - gap];
        shiftingIdx -= gap;
      }
      seq[shiftingIdx] = valueToInsert;
    }
  }
}
