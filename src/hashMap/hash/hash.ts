export function simpleHash(input: string | number, size: number) {
  if (typeof input === 'number') {
    return input % size;
  }
  const stringInput = input;
  let result = 0;
  for (let i = 0; i < stringInput.length; i++) {
    result += stringInput.charCodeAt(i);
  }
  return result % size;
}
