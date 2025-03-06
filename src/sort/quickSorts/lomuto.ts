export default function quickLomuto(
  seq: number[],
  callback: (a: number, b: number) => boolean,
): number[] {
  if (seq.length < 2) {
    return [...seq];
  }

  let left = 0;
  let right = 1;
  const pivot = seq[seq.length - 1];

  while (right < seq.length) {
    while (callback(seq[left], pivot) && left < right) {
      left++;
    }
    if (!callback(pivot, seq[right])) {
      [seq[left], seq[right]] = [seq[right], seq[left]];
      left++;
    }
    right++;
  }
  const leftPart = seq.slice(0, left - 1);
  const rightPart = seq.slice(left, seq.length);
  const leftSorted = quickLomuto(leftPart, callback);
  const rightSorted = quickLomuto(rightPart, callback);

  return [...leftSorted, pivot, ...rightSorted];
}
