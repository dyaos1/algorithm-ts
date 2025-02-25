export function simpleHash(input: string | number, size: number) {
  const key = typeof input === 'number' ? input.toString() : input;
  let result = 0;
  for (let i = 0; i < key.length; i++) {
    result += key.charCodeAt(i);
  }
  return result % size;
}
