import Sorter from './sorter';
import NumbersCollection from './numbersCollection';
import CharactersCollecton from './charactersCollection';

const numCollection = new NumbersCollection([9, 5, 2, 6, -4, 1]);
const charCollection = new CharactersCollecton('eDgbfac');

const sortedNumCollection = new Sorter(numCollection);
const sortedCharCollection = new Sorter(charCollection);

sortedNumCollection.sort();
sortedCharCollection.sort();

console.log(numCollection.data); // [ -4, 1, 2, 5, 6, 9 ]

console.log(charCollection.data); // abcDefg
