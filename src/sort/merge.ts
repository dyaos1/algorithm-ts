export default function mergeSort(
  seq: number[],
  callback: (f: number, b: number) => boolean,
): number[] {
  const len = seq.length;
  if (len < 2) return [...seq];

  // devide
  const half = Math.floor(len / 2);
  const leftHalf = seq.slice(0, half);
  const rightHalf = seq.slice(half, len);

  const leftArr = mergeSort(leftHalf, callback);
  const rightArr = mergeSort(rightHalf, callback);

  return merge(leftArr, rightArr, callback);
}

function merge(
  leftArr: number[],
  rightArr: number[],
  callback: (f: number, b: number) => boolean,
) {
  let leftIdx = 0;
  let rightIdx = 0;

  const merged: number[] = [];
  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (callback(leftArr[leftIdx], rightArr[rightIdx])) {
      merged.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      merged.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  return [...merged, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
}
