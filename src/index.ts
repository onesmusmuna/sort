// Sorting both numbers and string array.
// using a type guard
// instanceof
// typeof
// Disclaimer: This is bad code.

class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    // bubble sort

    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // using type guards.

        if (this.collection instanceof Array) {
          // This works only if collection is of number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}
