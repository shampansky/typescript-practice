// add readonly to property of object typ
type ProjectInfo = {
  name: string;
  readonly id: number;
};

const newProject: ProjectInfo = {
  id: 432,
  name: 'Villeroy',
};

// newProject.id = 32;

type immutableArray = readonly number[];

// create readonly array of numbers type
const randomNumbersArray: immutableArray = [323, 11, 24];

// randomNumbersArray.push(3)
