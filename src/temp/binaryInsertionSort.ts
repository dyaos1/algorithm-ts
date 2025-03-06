export default function binaryInsertionSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
) {
  const len = seq.length;
  // console.log(seq);
  for (let i = 1; i < len; i++) {
    let left = 0;
    let right = i - 1;
    let center = 0;

    let position = 0;
    const key = seq[i];
    while (left <= right) {
      center = Math.ceil((left + right) / 2);
      if (key === seq[center]) {
        break;
      } else if (callback(key, seq[center])) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }
    position = left <= right ? center + 1 : right + 1;

    // 한 칸 씩 밀기
    for (let j = i; position < j; j--) {
      seq[j] = seq[j - 1];
    }
    seq[position] = key;

    // // print
    // console.log(`${i}번째 인덱스의 값 ${key}를 넣을 위치를 찾습니다.`);
    // let rs = '';
    // seq.forEach(e => {
    //   if (e === key) {
    //     rs += `+${e}+`;
    //   } else {
    //     rs += ` ${e} `;
    //   }
    // });
    // console.log(rs);
  }
  return seq;
}
