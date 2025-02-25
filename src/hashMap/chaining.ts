import {simpleHash} from '../hash/hash';

interface HashNode {
  key: number | string;
  value: string;
  next: HashNode | undefined;
}

class HashMap {
  private nodes: (HashNode | undefined)[] = [];
  private size = 13;
  constructor(
    size?: number,
    initialValues?: {key: number | string; value: string}[],
  ) {
    if (size) {
      this.size = size;
    }
    this.nodes = new Array(this.size);
    if (initialValues) {
      console.log('');
    }
  }

  get(key: number | string): string | undefined {
    const hashedKey = simpleHash(key, this.size);
    let cursor = this.nodes[hashedKey];
    while (cursor) {
      if (cursor.key === key) {
        break;
      }
      cursor = cursor.next;
    }
    return cursor?.value;
  }

  add(key: number | string, value: string): boolean {
    // 키 값 중복
    if (this.get(key)) {
      return false;
    }

    const hashedKey = simpleHash(key, this.size);
    const newHashNode = {
      key: key,
      value: value,
      next: undefined,
    };
    let cursor = this.nodes[hashedKey];

    // 해당 key로 처음 등록될 때
    if (!cursor) {
      this.nodes[hashedKey] = newHashNode;
      return true;
    }

    while (cursor?.next) {
      cursor = cursor.next;
    }
    cursor.next = newHashNode;
    return true;
  }

  remove(key: number | string) {
    const hashedKey = simpleHash(key, this.size);

    let cursor = this.nodes[hashedKey];
    if (!cursor) {
      return false;
    }
    if (cursor?.key === key) {
      this.nodes[hashedKey] = cursor?.next;
      return true;
    }

    while (cursor?.next) {
      if (cursor.next.key === key) {
        break;
      }
      cursor = cursor.next;
    }
    if (!cursor) {
      return false;
    }
    cursor.next = cursor?.next?.next;
    return true;
  }

  dumps() {
    this.nodes.forEach((e, i) => {
      let acc = '[';
      let cursor = e;
      while (cursor) {
        acc += `(${cursor.key}, ${cursor.value}), `;
        cursor = cursor.next;
      }
      acc += ']';
      console.log(i, acc);
    });
  }

  reHash() {}
}

export default HashMap;
