type AnyNumber = number | string;

type Status = 'completed' | 'new' | 'in progress';

const currentTaskStatus: Status = 'in progress';

type CommonPerson = {
  name: string;
};

type Student = {
  course: 'mathematics' | 'physics' | 'computer';
};

const newStudent: CommonPerson & Student = {
  name: 'Marge',
  course: 'physics',
};
