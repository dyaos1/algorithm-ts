export function heapSort(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  const heap = new Heap(callback, seq);
  const sorted = heap.sort();
  return sorted;
}

class Heap {
  private bucket: number[];
  constructor(
    private callback: (f: number, b: number) => boolean,
    initialInput?: number[],
  ) {
    this.bucket = [];
    if (initialInput) {
      for (let i = 0; i < initialInput.length; i++) {
        this.insert(initialInput[i]);
      }
    }
  }

  insert(input: number) {
    this.bucket.push(input);
    let idx = this.bucket.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0) {
      if (!this.callback(this.bucket[idx], this.bucket[parentIdx])) {
        this.swap(idx, parentIdx);
      }
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    const lastIdx = this.bucket.length - 1;
    this.swap(0, lastIdx);

    let node = 0;
    while (node * 2 + 1 < lastIdx) {
      const leftChild = node * 2 + 1;
      const rightChild = node * 2 + 2;
      if (
        !this.callback(this.bucket[leftChild], this.bucket[rightChild]) ||
        rightChild >= lastIdx
      ) {
        if (this.callback(this.bucket[node], this.bucket[leftChild])) {
          this.swap(node, leftChild);
        }
        node = leftChild;
      } else {
        if (this.callback(this.bucket[node], this.bucket[rightChild])) {
          this.swap(node, rightChild);
        }
        node = rightChild;
      }
    }

    return this.bucket.pop();
  }

  swap(fIdx: number, bIdx: number) {
    [this.bucket[fIdx], this.bucket[bIdx]] = [
      this.bucket[bIdx],
      this.bucket[fIdx],
    ];
  }

  sort() {
    let limit = this.bucket.length - 1;
    while (0 < limit) {
      this.swap(0, limit);
      let target = 0;
      while (target * 2 + 1 < limit) {
        const leftChild = target * 2 + 1;
        const rightChild = target * 2 + 2;
        if (
          !this.callback(this.bucket[leftChild], this.bucket[rightChild]) ||
          rightChild >= limit
        ) {
          if (this.callback(this.bucket[target], this.bucket[leftChild])) {
            this.swap(target, leftChild);
          }
          target = leftChild;
        } else {
          if (this.callback(this.bucket[target], this.bucket[rightChild])) {
            this.swap(target, rightChild);
          }
          target = rightChild;
        }
      }
      limit--;
    }
    return this.bucket;
  }

  dumps(message: string) {
    console.log(`=====${message}=====`);
    console.log(this.bucket);
    let text = '';
    let num = 1;
    let num2 = 0;
    let i = 0;
    while (i < this.bucket.length) {
      text += ` (${this.bucket[i]})`;
      num2++;
      i++;
      if (num2 === num) {
        text += '\n';
        num2 = 0;
        num *= 2;
      }
    }
    console.log(text);
  }

  getBucket() {
    return this.bucket;
  }
}

export function heapify(
  seq: number[],
  callback: (f: number, b: number) => boolean,
) {
  const heap = new Heap(callback, seq);
  const heapified = heap.getBucket();

  return heapified;
}
