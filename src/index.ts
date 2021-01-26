import Sorter from './sorter';
import NumbersCollection from './numbersCollection';

const numCollection = new NumbersCollection([9, 5, 2, 6, -4, 1]);

const sortedNumCollection = new Sorter(numCollection);
sortedNumCollection.sort();

console.log(numCollection.data); // [ -4, 1, 2, 5, 6, 9 ]
