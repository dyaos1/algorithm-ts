// import HashMap from './hash/chaining';
import HashMap from './hashMap/openAddress';

const arr: [number, string][] = [
  [1, 'jack'],
  [14, 'john'],
  [2, 'hello'],
  [4, 'messi'],
  [27, 'hali'],
  [30, 'hali30'],
  [21, 'hali21'],
  [22, 'hali22'],
  [23, 'hali23'],
  [24, 'hali24'],
  [25, 'hali25'],
];
const hash = new HashMap();

arr.forEach(e => {
  hash.add(e[0], e[1]);
});
hash.dumps();
hash.remove(14);
hash.dumps();
hash.remove(23);
hash.dumps();
