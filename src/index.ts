import {heapSort} from './sort/heap';
import shuffle from './utils/shuffle';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
shuffle(arr);

heapSort(arr, (a, b) => a < b);
