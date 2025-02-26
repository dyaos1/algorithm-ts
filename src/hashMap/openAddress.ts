import {findNextPrime} from '../utils/primeNumber';
import {simpleHash} from './hash/hash';

interface HashNode {
  key: string | number | undefined;
  value: string | undefined;
  status: 'DELETED' | 'OCCUPIED';
}

class OpenAddress {
  private nodes: (HashNode | undefined)[];
  private capacity = 13;
  private numberOfElemenets = 0;
  constructor(capacity?: number, initialValues?: HashNode[]) {
    if (capacity) {
      this.capacity = capacity;
    }
    this.nodes = new Array(this.capacity);
    if (initialValues) {
      console.log('');
    }
  }

  // 사정에 맞 게 수정
  next(index: number) {
    return index * index;
  }

  get(key: number | string): string | undefined {
    const hashedKey = simpleHash(key, this.capacity);
    let cursor = hashedKey;
    let i = 0;

    while (this.nodes[cursor]) {
      if (this.nodes[cursor]?.key === key) {
        break;
      }
      i++;
      cursor += this.next(i);
    }

    return this.nodes[cursor]?.value;
  }

  add(key: number | string, value: string): boolean {
    // 키 값 중복
    if (this.get(key)) {
      return false;
    }

    if (this.capacity * 0.6 < this.numberOfElemenets) {
      this.reHash();
    }

    const hashedKey = simpleHash(key, this.capacity);
    const newHashNode: HashNode = {
      key: key,
      value: value,
      status: 'OCCUPIED',
    };

    let cursor = hashedKey;
    let i = 0;

    while (this.nodes[cursor]) {
      i++;
      cursor += this.next(i);

      if (i > 100) {
        return false;
      }
    }
    this.nodes[cursor] = newHashNode;
    this.numberOfElemenets++;
    return true;
  }

  remove(key: number | string) {
    const hashedKey = simpleHash(key, this.capacity);

    let cursor = hashedKey;
    let i = 0;
    while (this.nodes[cursor]) {
      if (this.nodes[cursor]?.key === key) {
        break;
      }
      i++;
      cursor += this.next(i);
    }
    if (!this.nodes[cursor]) {
      return false;
    }
    this.nodes[cursor]!.key = undefined;
    this.nodes[cursor]!.value = undefined;
    this.nodes[cursor]!.status = 'DELETED';
    this.numberOfElemenets--;
    return true;
  }

  dumps() {
    this.nodes.forEach((e, i) => {
      console.log(
        `${i}: key: ${e?.key}, value: ${e?.value}, status: ${e?.status}`,
      );
    });
  }

  reHash() {
    const temp = [...this.nodes];
    this.capacity = findNextPrime(this.capacity * 2);
    this.nodes = new Array(this.capacity);
    this.numberOfElemenets = 0;

    temp.forEach(e => {
      if (e?.key && e?.value) {
        this.add(e?.key, e?.value);
      }
    });
  }
}

export default OpenAddress;
