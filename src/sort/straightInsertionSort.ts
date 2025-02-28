export default function straightInsertionSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
): number[] {
  const len = seq.length;

  for (let i = 0; i < len - 1; i++) {
    let rep = seq[i];
    let idx = i;
    for (let j = i; j < len; j++) {
      if (!callback(rep, seq[j])) {
        rep = seq[j];
        idx = j;
      }
    }

    // 한칸씩 밀기
    const v = seq[idx];
    for (let j = idx; i < j; j--) {
      seq[j] = seq[j - 1];
    }
    seq[i] = v;

    // 그냥 이렇게 해도 되지만, 삽입 정렬은 한칸씩 옮기는게 미덕이라고 한다.
    // [seq[i], seq[idx]] = [seq[idx], seq[i]];
  }

  return seq;
}
