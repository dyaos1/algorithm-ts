// import HashMap from './hashMap/openAddress';
import HashMap from './hashMap/chaining';

const hashMap = new HashMap();

hashMap.add(36, 'Lee Seungyeop');
hashMap.add(17, 'Otani Shohei');
hashMap.add(23, 'Michael Jordan');
const mj = hashMap.get(23);
console.log(mj);
hashMap.remove(23);
const mjRemoved = hashMap.get(23);
console.log(mjRemoved);
