// import HashMap from './hashMap/openAddress';
import HashMap from './hashMap/chaining';

// const arr: [number, string][] = [
//   [1, 'jack'],
//   [14, 'john'],
//   [2, 'hello'],
//   [4, 'messi'],
//   [27, 'hali'],
//   [30, 'hali30'],
//   [21, 'hali21'],
// ];
const hash = new HashMap();
const arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
];
console.log(arr.length);
arr.forEach(e => {
  console.log(e);
  hash.add(e, `i-${e}`);
});
hash.dumps();

// arr.forEach(e => {
//   hash.add(e[0], e[1]);
// });
// hash.dumps();
// hash.add(22, 'hali22');
// hash.add(23, 'hali23');
// hash.dumps();
// hash.remove(14);
// hash.remove(23);
// hash.dumps();

for (let i = 100; i < 200; i++) {
  hash.add(i, `i-${i}`);
}
hash.dumps();
hash.reHash();
hash.dumps();
