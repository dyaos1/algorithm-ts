export default function shellSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
) {
  let hNumber = 1;
  while (hNumber < seq.length / 9) {
    hNumber = hNumber * 3 + 1;
  }
  while (0 < hNumber) {
    shellSortH(seq, callback, hNumber);
    hNumber = (hNumber - 1) / 3;
  }
  return seq;
}

function shellSortH(
  seq: number[],
  callback: (a: number, b: number) => boolean,
  hNumber: number,
) {
  console.log(`================${hNumber}================`);
  for (let i = 0; i < hNumber; i++) {
    for (let j = i; j < seq.length - hNumber; j = j + hNumber) {
      let candidate = seq[j];
      let cursor = j;
      for (let k = j + hNumber; k < seq.length; k = k + hNumber) {
        if (!callback(candidate, seq[k])) {
          candidate = seq[k];
          cursor = k;
        }
      }
      for (let k = cursor; j < k; k = k - hNumber) {
        seq[k] = seq[k - hNumber];
      }
      seq[j] = candidate;
    }
  }
  return seq;
}

function straightInsertSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
) {
  const len = seq.length;

  for (let i = 0; i < len - 1; i++) {
    let candidate = seq[i];
    let cursor = i;
    for (let j = i + 1; j < len; j++) {
      if (!callback(candidate, seq[j])) {
        candidate = seq[j];
        cursor = j;
      }
    }
    for (let j = cursor; i < j; j--) {
      seq[j] = seq[j - 1];
    }
    seq[i] = candidate;
  }
  return seq;
}
