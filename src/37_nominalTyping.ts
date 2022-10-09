type SortedList<T> = T[] & {_brand: 'sorted'};

function binaryFindIndex<T>(xs: SortedList<T>, x: T): number {
  let low = 0;
  let high = xs.length - 1;

  while (high >= low) {
    const mid = low + Math.floor((high - low) / 2);
    const currentValue = xs[mid];
    if (currentValue === x) return mid;
    [low, high] = x > currentValue ? [mid + 1, high] : [low, mid - 1];
  }
  return -1;
}

const array = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9];

function isSorted<T>(xs: T[]): xs is SortedList<T> {
  return xs.every((v, i, array) => {
    const isEnd = array[i + 1] === undefined;
    return v <= array[i + 1] || isEnd;
  });
}

function main() {
  const isSorting = isSorted(array);
  let result: number;
  if (isSorting) {
    result = binaryFindIndex(array, 8);
  } else {
    result = -1;
  }
  console.log('isSorted : ', isSorting);
  console.log(result);
}

main();
