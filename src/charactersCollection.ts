import Sorter from './sorter';

export default class CharactersCollecton extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    // separete sstring into array of characters.
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];

    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}
