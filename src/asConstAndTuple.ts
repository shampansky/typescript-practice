// create string literal type with let
let personName = 'John' as const;

//create string array that cannot change
const numberStrings = ['one', 'two', 'three'] as const;

// create array of strings. create foreach loop for this array. Create type object with any key and value is union of strings of array
const VOLUME_LEVELS = ['low', 'normal', 'high'] as const;

type RoomSettings = {
  volume: (typeof VOLUME_LEVELS)[number];
};

VOLUME_LEVELS.forEach((level) => {
  console.log(level);
});

// create a tuple type
type TupleArray = [string, number, boolean];

const passenger: TupleArray = ['Adam', 23, true];
