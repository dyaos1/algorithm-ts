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

function shellSortH2(
  seq: number[],
  callback: (a: number, b: number) => boolean,
  hNumber: number,
) {
  let cursorA = 0;
  while (cursorA < hNumber) {
    let cursorB: number = cursorA;
    while (cursorB < seq.length - hNumber) {
      let cursorC: number = cursorB + hNumber;
      while (cursorC < seq.length) {
        let cursorD = cursorB;
        while (cursorD < cursorC) {
          if (callback(seq[cursorD], seq[cursorC])) {
            const temp = seq[cursorC];
            let cursorE = cursorC;
            while (cursorD < cursorE) {
              seq[cursorE] = seq[cursorE - hNumber];
              cursorE--;
            }
            seq[cursorD] = temp;
            break;
          }
          cursorD = cursorD + hNumber;
        }
        cursorC++;
      }
      cursorB = cursorB + hNumber;
    }

    cursorA++;
  }
}
