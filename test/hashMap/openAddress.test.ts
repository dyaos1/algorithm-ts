import HashMap from '../../src/hashMap/openAddress';

const hashMap = new HashMap();

test('hashMap: Chaining test - unit', () => {
  expect(hashMap.add('hello', 'world')).toBe(true);
  expect(hashMap.add('hello', 'world')).toBe(false);
  expect(hashMap.get('hello')).toBe('world');
  expect(hashMap.remove('hello')).toBe(true);
  expect(hashMap.remove('world')).toBe(false);
  expect(hashMap.get('hello')).toBeFalsy();
});

test('hashMap: Chaining test - mass', () => {
  for (let i = 0; i < 1000; i++) {
    hashMap.add(i, `${i}`);
  }
  expect(hashMap.get(900)).toBe('900');
  expect(hashMap.remove(900)).toBe(true);
  expect(hashMap.get(900)).toBe(undefined);
  hashMap.dumps();
});
