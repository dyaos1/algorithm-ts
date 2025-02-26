function isPrime(num: number): boolean {
  const root = Math.sqrt(num);
  for (let i = 2; i < root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findNextPrime(num: number): number {
  while (!isPrime(num)) {
    num++;
  }
  return num;
}

export {findNextPrime};
