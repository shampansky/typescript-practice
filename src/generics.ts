// select element with a class of '.input' and make it HTMLInputElement
const inputElement = document.querySelector<HTMLInputElement>('.input');

inputElement?.value;

// write a typed function that returns second element of a given array
function getSecondElement<ArrayType>(arr: ArrayType[]) {
  return arr[1];
}

const testNumArray = [3, true];
getSecondElement(testNumArray); //?

// create an empty Set of strings
const typedSet = new Set<number>();
typedSet.add(3);

// create an empty Mao of string -> number

// create type APIResponse with key data and value TData (which is passed as generic) 1) with default value and 2) is an object
// create multiple types which uses APIResponse type as a starting point
// create variable with these types

// create a number array in two ways

// create a function that converts array to object
// [['key1', 1], ['key2', 2], ['key3', 3],]
// to
// {key1: 1, key2: 2, key3: 3, }
