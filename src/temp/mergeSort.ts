export default function mergeSort(
  seq: number[],
  callback: (a: number, b: number) => boolean,
): number[] {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const len = seq.length;
    if (len === 0) return [];
    if (len === 1) return [seq[0]];
    if (len === 2) {
      return callback(seq[0], seq[1]) ? [seq[0], seq[1]] : [seq[1], seq[0]];
    }

    const half = Math.floor(len / 2);
    console.log(`len: ${len} half:${half}`);
    const frontPart = seq.slice(0, half);
    const endPart = seq.slice(half, len);
    console.log(frontPart);
    console.log(endPart);

    const frontPartProcessed = mergeSort(frontPart, callback);
    const endPartProcessed = mergeSort(endPart, callback);
    console.log(frontPartProcessed);
    console.log(endPartProcessed);
    if (frontPart.length !== frontPartProcessed.length) {
      console.log('-------------<Error>------------');
      console.log(frontPart);
      console.log(frontPartProcessed);
      console.log('-------------</Error>-----------');
    }
    if (endPart.length !== endPartProcessed.length) {
      console.log('-------------<Error>------------');
      console.log(endPart);
      console.log(endPartProcessed);
      console.log('-------------</Error>-----------');
    }

    const newList: number[] = [];
    let frontPartCursor = 0;
    let endPartCursor = 0;

    while (
      frontPartCursor < frontPartProcessed.length &&
      endPartCursor < endPartProcessed.length
    ) {
      if (
        frontPartProcessed[frontPartCursor] < endPartProcessed[endPartCursor]
      ) {
        newList.push(frontPartProcessed[frontPartCursor]);
        frontPartCursor++;
      } else {
        newList.push(endPartProcessed[endPartCursor]);
        endPartCursor++;
      }
    }

    // 나머지 추가
    if (frontPartCursor < frontPart.length) {
      const remain = frontPartProcessed.slice(
        frontPartCursor,
        frontPart.length,
      );
      newList.splice(newList.length, 0, ...remain);
    }
    if (endPartCursor < endPart.length) {
      const remain = endPartProcessed.slice(endPartCursor, endPart.length);
      newList.splice(newList.length, 0, ...remain);
    }

    return newList;
  }
}
