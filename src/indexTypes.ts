// create an object type. one of the values is the union of strings. use that value as a type in function parameter
type Teacher = {
  id: string;
  level: 'new' | 'intermediate' | 'expert';
};

function getTeacherLevelString(level: Teacher['level']) {
  return `level is ${level}`;
}

const nextLevelText = getTeacherLevelString('intermediate');

// create an object type. the keys in this object are strings, values of this object are arrays of players

type TeachersCategorized = {
  [index: string]: Teacher[];
};

const categorizedTeachers: TeachersCategorized = {
  firstGroup: [
    {
      id: '3',
      level: 'expert',
    },
    {
      id: '222',
      level: 'intermediate',
    },
  ],
};

// create an object type. the keys in this object are values of the union of strings from another type,
// values of this object are arrays of players

type TeachersByLevels = {
  [index in Teacher['level']]: Teacher[];
};

const sortedTeachers: TeachersByLevels = {
  new: [
    {
      id: '3323',
      level: 'new',
    },
  ],
  expert: [
    {
      id: '3',
      level: 'expert',
    },
  ],
  intermediate: [
    {
      id: '222',
      level: 'intermediate',
    },
  ],
};

// create an array with string and boolean values. Create a type which looks for all types of that array items.
const someRandomArray = ['one', 2, 3];

type ArrayTypes = (typeof someRandomArray)[number];

// create an object with string and boolean values. Create a type which gets a type of the value of the specific key.
const customer2 = {
  id: '2',
  priority: 'high',
  isRegistered: false,
};

type SpecificKeyType = (typeof customer2)['isRegistered'];

// create an object with string and boolean values. Create a type which looks for all types of that object values.

type ObjectAllKeysType = (typeof customer2)[keyof typeof customer2];
