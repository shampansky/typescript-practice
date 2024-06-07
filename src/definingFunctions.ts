const doubleNumber = (num: number) => {
  return num * 2;
};

function tripleNumber(num: number) {
  return num * 3;
}

const numberToString = (num: number | string): string => {
  return String(num);
};

type BaseUser = {
  name: string;
  type: string;
  id: number | string;
};

function getUserName(user: BaseUser) {
  return user.name;
}

const getUserId = (user: BaseUser): string | number => {
  return user.id;
};

type NumberFromString = (num: number) => string;

const n2s: NumberFromString = (num) => {
  return `${num}`;
};

const printName = (name: string) => {
  console.log(name);
};

const printResult = printName('Michael');

// optional params

const printNameAndAge = (name: string, age?: number) => {
  console.log(name, age);
};

printNameAndAge('Peter');

// destructured and rest params

// destructure object param, set default value to it
type TextOptions = {
  isUppercase?: boolean;
  prefix?: string;
};

function getFormattedText(
  text: string,
  { isUppercase = false, prefix }: TextOptions = {}
) {
  const resultString = isUppercase ? text.toUpperCase() : text;
  return [prefix, resultString].join(' ');
}

getFormattedText('one', { isUppercase: true, prefix: 'str:' }); //?

const getText = (str: string, { isLowerCase = true } = {}) => {
  return isLowerCase ? str.toLowerCase() : str;
};

const getSum = (...args: number[]) => {
  console.log(args);
  return args.reduce((prev, cur) => prev + cur, 10);
};

getSum(1, 3, 4); //?

type NumberCallback = (num1: number, num2: number) => number;

function operateWithCallback(a: number, b: number, callBack: NumberCallback) {
  return callBack(a, b);
}

operateWithCallback(1, 5, (num1, num2) => num1 + num2); //?
