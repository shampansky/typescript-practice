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

// create an empty Map of string -> number
const typedMap = new Map<number, string>();
typedMap.set(4, 'fd');

// create type APIResponse with key data and value TData (which is passed as generic) 1) with default value and 2) is an object
// create multiple types which uses APIResponse type as a starting point
// create variable with these types
type APIResponse<TData extends object = { id: number }> = {
  data: TData;
  error: boolean;
};

const res1: APIResponse = {
  data: { id: 3 },
  error: false,
};

type APIUserResponse = APIResponse<{ user: string }>;
const userRes1: APIUserResponse = {
  data: { user: 'Mike' },
  error: false,
};

type APIPostResponse = APIResponse<{ title: string; id: number }>;
const postRes1: APIPostResponse = {
  data: {
    title: 'How to setup environment',
    id: 453,
  },
  error: false,
};

// create a number array in two ways
const numArray1: number[] = [3, 7, 8];
const numArray2: Array<number> = [3, 7, 8];

// create a function that converts array to object
// [['key1', 1], ['key2', 2], ['key3', 3],]
// to
// {key1: 1, key2: 2, key3: 3, }

function convertArrayToObject<T>(arr: [string, T][]) {
  const resultObj: {
    [index: string]: T;
  } = {};
  arr.forEach((item) => {
    resultObj[item[0]] = item[1];
  });
  return resultObj;
}

const arrayToConvert: [string, string | number][] = [
  ['key1', 1],
  ['key2', 2],
  ['key3', 3],
];

convertArrayToObject(arrayToConvert); //?
