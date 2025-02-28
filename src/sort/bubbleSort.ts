function bubbleSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
) {
  const len = seq.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const a = seq[j];
      const b = seq[j + 1];
      if (!callback(a, b)) {
        seq[j] = b;
        seq[j + 1] = a;
      }
    }
  }

  return seq;
}

export default bubbleSort;
