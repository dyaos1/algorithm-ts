// export default function straightInsertionSort(
//   seq: number[],
//   callback: (a: number, b: number) => boolean,
// ): number[] {
//   const len = seq.length;

//   for (let i = 0; i < len - 1; i++) {
//     let rep = seq[i];
//     let idx = i;
//     for (let j = i; j < len; j++) {
//       if (!callback(rep, seq[j])) {
//         rep = seq[j];
//         idx = j;
//       }
//     }

//     // 한칸씩 밀기
//     const v = seq[idx];
//     for (let j = idx; i < j; j--) {
//       seq[j] = seq[j - 1];
//     }
//     seq[i] = v;

//     // 그냥 이렇게 해도 되지만, 삽입 정렬은 한칸씩 옮기는게 미덕이라고 한다.
//     // [seq[i], seq[idx]] = [seq[idx], seq[i]];
//   }

//   return seq;
// }

// export default function straightInsertionSort2(
//   seq: number[],
//   callback: (a: number, b: number) => boolean,
// ) {
//   const len = seq.length;

//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (!callback(seq[j], seq[i])) {
//         const temp = seq[i];
//         for (let k = i; j < k; k--) {
//           seq[k] = seq[k - 1];
//         }
//         seq[j] = temp;
//       }
//     }
//   }
//   return seq;
// }

// export default function straightInsertionSort2(
//   seq: number[],
//   callback: (a: number, b: number) => boolean,
// ) {
//   const len = seq.length;

//   let lCursor = 0;
//   let rCursor = 1;

//   while (lCursor < len - 1) {
//     if (seq[lCursor] > seq[rCursor]) {
//       const temp = seq[rCursor];
//       for (let i = rCursor; lCursor < i; i--) {
//         seq[rCursor] = seq[rCursor - 1];
//         seq[lCursor] = temp;
//       }
//     }
//     lCursor++;
//     if (lCursor === rCursor) {
//       rCursor++;
//       lCursor = 0;
//     }
//   }
//   console.log(seq);
//   return seq;
// }

export function insertionSortStraight(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  let lCursor = 0;
  let rCursor = 1;
  while (rCursor < seq.length) {
    if (!callback(seq[lCursor], seq[rCursor])) {
      const temp = seq[rCursor];
      let tempPos = rCursor;
      while (lCursor < tempPos) {
        seq[tempPos] = seq[tempPos - 1];
        tempPos--;
      }
      seq[lCursor] = temp;
    }
    lCursor++;
    if (lCursor === rCursor) {
      rCursor++;
      lCursor = 0;
    }
  }
  return seq;
}
