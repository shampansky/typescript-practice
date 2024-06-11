// create an object type. one of the values is the union of strings. use that value as a type in function parameter
type Teacher = {
  id: string;
  level: 'new' | 'intermediate' | 'expert';
};

function getTeacherData();

// create an object type. the keys in this object are strings, values of this object are arrays of players

// create a object type. the keys in this object are values of the union of strings from another type,
// values of this object are arrays of players

// create an array with string and boolean values. Create a type which looks for all types of that array items.

// create an object with string and boolean values. Create a type which gets a type of the value of the specific key.

// create an object with string and boolean values. Create a type which looks for all types of that object values.
