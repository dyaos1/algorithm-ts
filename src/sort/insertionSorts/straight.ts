export default function insertionSortStraight(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  for (let cursor = 1; cursor < seq.length; cursor++) {
    let shiftingIdx = cursor;
    const valueToInsert = seq[cursor];
    while (!callback(seq[shiftingIdx - 1], valueToInsert) && shiftingIdx > 0) {
      seq[shiftingIdx] = seq[shiftingIdx - 1];
      shiftingIdx--;
    }
    seq[shiftingIdx] = valueToInsert;
  }
  return seq;
}
