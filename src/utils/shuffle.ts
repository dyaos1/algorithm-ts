export default function shuffle<T>(seq: T[]): T[] {
  const len = seq.length;
  for (let i = 0; i < len - 1; i++) {
    const randIdx = Math.floor(Math.random() * (len - i) + i);
    [seq[i], seq[randIdx]] = [seq[randIdx], seq[i]];
    // console.log(
    //   `[${i}, ${randIdx}] 의 값 [${seq[randIdx]}, ${seq[i]}]}을 서로 바꿉니다.`,
    // );
    // console.log(seq);
  }
  return seq;
}
