export default function quickHoar(
  seq: number[],
  callback: (f: number, back: number) => boolean,
) {
  hoar(seq, 0, seq.length - 1, callback);
  return seq;
}

function hoar(
  seq: number[],
  startIdx: number,
  lastIdx: number,
  callback: (f: number, back: number) => boolean,
) {
  if (lastIdx - startIdx < 5) {
    return straightInsertion(seq, startIdx, lastIdx, callback);
  }
  // if (lastIdx - startIdx < 2) {
  //   return seq;
  // }
  // if (lastIdx - startIdx === 2) {
  //   if (!callback(seq[startIdx], seq[lastIdx])) {
  //     [seq[startIdx], seq[lastIdx]] = [seq[lastIdx], seq[startIdx]];
  //   }
  //   return seq;
  // }
  const pivot = seq[lastIdx];
  let left = startIdx;
  let right = lastIdx - 1;

  while (left < right) {
    while (callback(seq[left], pivot)) {
      left++;
    }
    while (callback(pivot, seq[right])) {
      right--;
    }
    if (left < right) {
      [seq[left], seq[right]] = [seq[right], seq[left]];
      left++;
      right--;
    }
  }

  if (callback(seq[left], pivot)) {
    left++;
    [seq[lastIdx], seq[left]] = [seq[left], seq[lastIdx]];
  } else {
    [seq[lastIdx], seq[left]] = [seq[left], seq[lastIdx]];
  }

  hoar(seq, 0, left - 1, callback);
  hoar(seq, left + 1, lastIdx, callback);

  return seq;
}

function straightInsertion(
  seq: number[],
  startIdx: number,
  lastIdx: number,
  callback: (f: number, b: number) => boolean,
) {
  let cursor = startIdx + 1;

  while (cursor <= lastIdx) {
    let insertIdx = cursor;
    const valueToInsert = seq[cursor];
    while (
      startIdx < insertIdx &&
      !callback(seq[insertIdx - 1], valueToInsert)
    ) {
      seq[insertIdx] = seq[insertIdx - 1];
      insertIdx--;
    }
    seq[insertIdx] = valueToInsert;
    cursor++;
  }

  return seq;
}
