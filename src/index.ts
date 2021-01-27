import NumbersCollection from './numbersCollection';
import CharactersCollecton from './charactersCollection';

const myNumbers = new NumbersCollection([9, 5, 8, 0, 2, -1]);
const myCharacters = new CharactersCollecton('ebfdgac');

myNumbers.sort();
myCharacters.sort();

console.log(myNumbers.data); // [ -1, 0, 2, 5, 8, 9 ]
console.log(myCharacters.data); // abcdefg
